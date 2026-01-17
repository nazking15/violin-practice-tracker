# Violin Practice Tracker

A beautiful web application to track your daughter's violin practice sessions with cloud sync across all devices.

## Features

- **Quick Logging**: Record practice sessions with date, duration, and notes
- **Practice History**: View all past practice sessions in chronological order
- **Statistics**: See practice totals for this week, this month, and all-time session count
- **Cloud Storage**: Data synced via Supabase - access from any device
- **Beautiful UI**: Clean, modern interface that's easy to use
- **Mobile Friendly**: Works great on phones, tablets, and computers

## Quick Start

### For First-Time Setup

1. **Set up Supabase** (one-time, 5 minutes):
   - Follow instructions in `SUPABASE_SETUP.md`
   - Get your Project URL and API key
   - Add them to `js/config.js`

2. **Deploy to the web** (one-time, 5 minutes):
   - Follow instructions in `DEPLOYMENT_GUIDE.md`
   - Get a free live URL via Vercel
   - Access from anywhere!

### For Local Development

1. Open `index.html` in your browser, OR
2. Run a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## How to Use

### Logging a Practice Session

1. Select the date (defaults to today)
2. Enter the duration in minutes
3. Optionally add notes about what was practiced
4. Click "Log Practice Session"

### Viewing Statistics

The app automatically calculates:
- Total minutes practiced this week
- Total minutes practiced this month
- Total number of practice sessions

### Managing Sessions

- View all sessions in the Practice History section
- Delete any session by clicking the "Delete" button

## Files Structure

```
violin-practice-tracker/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling
├── js/
│   ├── config.js           # Supabase configuration
│   └── app.js              # Application logic
├── README.md               # This file
├── SUPABASE_SETUP.md       # Database setup guide
├── DEPLOYMENT_GUIDE.md     # Vercel deployment guide
└── vercel.json             # Deployment configuration
```

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **All Free Tier!**

## Data Storage

- **Cloud-based**: Uses Supabase PostgreSQL database
- **Syncs across devices**: Access from phone, tablet, computer
- **Secure**: Row Level Security policies protect your data
- **Backed up**: Supabase handles automatic backups

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Future Enhancements

Ideas for features you could add:

1. **Charts & Graphs**: Visualize practice time over weeks/months using Chart.js
2. **Goals**: Set weekly practice goals and track progress
3. **Reminders**: Add browser notifications for practice reminders
4. **Export Data**: Download practice history as CSV or PDF
5. **Multiple Students**: Track practice for multiple children with user authentication
6. **Pieces/Repertoire**: Track specific pieces being learned
7. **Achievements**: Earn badges for practice streaks
8. **Audio Recording**: Record practice sessions
9. **Teacher Portal**: Share progress with violin teacher

## Making Changes

### To modify the appearance:
- Edit `css/styles.css`
- Change colors, fonts, spacing, etc.

### To add features:
- Edit `js/app.js` for new functionality
- Edit `index.html` to add new UI elements

### To deploy changes:
```bash
git add .
git commit -m "Description of changes"
git push
```
Vercel will automatically redeploy!

## Troubleshooting

### "Supabase not configured" error
- Make sure you updated `js/config.js` with your real credentials
- Check that SUPABASE_URL and SUPABASE_ANON_KEY are not the placeholder values

### Data not saving
- Open browser console (F12) and check for errors
- Verify Supabase credentials are correct
- Make sure you ran the SQL setup from SUPABASE_SETUP.md

### Deployment issues
- Check that you pushed all files to GitHub
- Verify Vercel deployment logs for errors
- Make sure `js/config.js` has your real Supabase credentials

## Security Note

- The Supabase anon key is safe to include in public code
- Row Level Security policies protect your data
- For multi-user scenarios, consider adding authentication

## Need Help?

If you want to add new features or customize the app:
- Ask Claude Code for assistance
- Check Supabase documentation: https://supabase.com/docs
- Check Vercel documentation: https://vercel.com/docs

Happy practicing! 🎻
