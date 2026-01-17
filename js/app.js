// Practice Tracker App - Main JavaScript File with Supabase Integration

// Initialize app immediately (DOM is already loaded when this script runs)
(function() {
    console.log('App initializing...');

    // Make sure Supabase is initialized
    if (typeof initSupabase === 'function') {
        initSupabase();
    }

    // Set default date to today
    document.getElementById('practiceDate').valueAsDate = new Date();

    // Load and display existing sessions
    loadPracticeSessions();

    // Set up form submission
    document.getElementById('practiceForm').addEventListener('submit', handleFormSubmit);

    // Hide loading overlay after initial load
    hideLoading();

    console.log('App initialized. Supabase client:', supabaseClient ? 'Ready' : 'Not initialized');
})();

// Show/hide loading overlay
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();

    showLoading();

    // Get form values
    const date = document.getElementById('practiceDate').value;
    const duration = parseInt(document.getElementById('duration').value);
    const notes = document.getElementById('notes').value;

    // Create practice session object
    const session = {
        date: date,
        duration: duration,
        notes: notes || null
    };

    // Save to storage
    const success = await savePracticeSession(session);

    if (success) {
        // Reset form
        document.getElementById('practiceForm').reset();
        document.getElementById('practiceDate').valueAsDate = new Date();

        // Reload display
        await loadPracticeSessions();

        // Show success feedback
        showNotification('Practice session logged successfully!', 'success');
    } else {
        showNotification('Failed to save practice session. Please try again.', 'error');
    }

    hideLoading();
}

// Save a practice session to Supabase
async function savePracticeSession(session) {
    console.log('Attempting to save session:', session);
    console.log('Supabase client available:', !!supabaseClient);

    if (!supabaseClient) {
        console.error('Supabase not configured');
        alert('Supabase connection not initialized. Please refresh the page.');
        return false;
    }

    try {
        console.log('Calling Supabase insert...');
        const { data, error } = await supabaseClient
            .from('practice_sessions')
            .insert([session])
            .select();

        if (error) {
            console.error('Error saving session:', error);
            alert('Database error: ' + error.message);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Unexpected error:', error);
        return false;
    }
}

// Get all practice sessions from Supabase
async function getPracticeSessions() {
    if (!supabaseClient) {
        console.error('Supabase not configured');
        return [];
    }

    try {
        const { data, error } = await supabaseClient
            .from('practice_sessions')
            .select('*')
            .order('date', { ascending: false });

        if (error) {
            console.error('Error loading sessions:', error);
            return [];
        }

        return data || [];
    } catch (error) {
        console.error('Unexpected error:', error);
        return [];
    }
}

// Load and display all practice sessions
async function loadPracticeSessions() {
    showLoading();

    const sessions = await getPracticeSessions();

    // Update statistics
    updateStatistics(sessions);

    // Display practice history
    displayPracticeHistory(sessions);

    hideLoading();
}

// Update statistics display
function updateStatistics(sessions) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Calculate week start (assuming week starts on Monday)
    const weekStart = new Date(today);
    const day = weekStart.getDay();
    const diff = weekStart.getDate() - day + (day === 0 ? -6 : 1);
    weekStart.setDate(diff);

    // Calculate month start
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    // Calculate totals
    let weekTotal = 0;
    let monthTotal = 0;

    sessions.forEach(session => {
        const sessionDate = new Date(session.date + 'T00:00:00');

        if (sessionDate >= weekStart) {
            weekTotal += session.duration;
        }

        if (sessionDate >= monthStart) {
            monthTotal += session.duration;
        }
    });

    // Update display
    document.getElementById('weekTotal').textContent = weekTotal;
    document.getElementById('monthTotal').textContent = monthTotal;
    document.getElementById('sessionCount').textContent = sessions.length;
}

// Display practice history
function displayPracticeHistory(sessions) {
    const historyContainer = document.getElementById('practiceHistory');

    if (sessions.length === 0) {
        historyContainer.innerHTML = '<p class="empty-state">No practice sessions logged yet. Start by logging your first session above!</p>';
        return;
    }

    // Build HTML for all sessions
    const html = sessions.map(session => `
        <div class="practice-item">
            <div class="practice-header">
                <span class="practice-date">${formatDate(session.date)}</span>
                <div>
                    <span class="practice-duration">${session.duration} min</span>
                    <button class="btn-delete" onclick="deleteSession(${session.id})">Delete</button>
                </div>
            </div>
            ${session.notes ? `<div class="practice-notes">${escapeHtml(session.notes)}</div>` : ''}
        </div>
    `).join('');

    historyContainer.innerHTML = html;
}

// Delete a practice session
async function deleteSession(sessionId) {
    if (!confirm('Are you sure you want to delete this practice session?')) {
        return;
    }

    showLoading();

    if (!supabaseClient) {
        console.error('Supabase not configured');
        hideLoading();
        return;
    }

    try {
        const { error } = await supabaseClient
            .from('practice_sessions')
            .delete()
            .eq('id', sessionId);

        if (error) {
            console.error('Error deleting session:', error);
            showNotification('Failed to delete session. Please try again.', 'error');
        } else {
            showNotification('Session deleted successfully!', 'success');
            // Reload display
            await loadPracticeSessions();
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        showNotification('Failed to delete session. Please try again.', 'error');
    }

    hideLoading();
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00'); // Add time to avoid timezone issues
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Show notification
function showNotification(message, type = 'info') {
    // For now, use alert. You can replace with a better notification system later
    alert(message);
}
