// Supabase Configuration
// IMPORTANT: Replace these values with your actual Supabase credentials
// Get these from: https://app.supabase.com -> Your Project -> Settings -> API

const SUPABASE_URL = 'https://bgtktvaqyususdjarqke.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJndGt0dmFxeXVzdXNkamFycWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1OTAzNDAsImV4cCI6MjA4NDE2NjM0MH0.uxIMABFAzpMDLByJbCAo7eg5o1g-1zTgTItztQXt4RI';

// Initialize Supabase client (will be set when library loads)
let supabaseClient = null;

// Initialize Supabase when the library is loaded
function initSupabase() {
    if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
        const { createClient } = window.supabase;
        supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase client initialized successfully:', supabaseClient);
        return true;
    } else {
        console.error('Supabase library not loaded');
        return false;
    }
}

// Try to initialize immediately (in case library is already loaded)
if (typeof window.supabase !== 'undefined') {
    initSupabase();
}
