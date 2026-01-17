# Deployment Guide

This guide will walk you through deploying your Violin Practice Tracker to the web for free using Vercel.

## Prerequisites

Before you begin, make sure you have:
1. Completed the Supabase setup (see SUPABASE_SETUP.md)
2. Added your Supabase credentials to `js/config.js`
3. A GitHub account (free)

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Fill in the details:
   - **Repository name**: violin-practice-tracker
   - **Description**: Track violin practice sessions
   - **Visibility**: Public or Private (your choice)
   - **Do NOT initialize** with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 2: Push Your Code to GitHub

1. Open your terminal and navigate to the project folder:
   ```bash
   cd violin-practice-tracker
   ```

2. Copy the commands from GitHub (they'll look like this):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/violin-practice-tracker.git
   git branch -M main
   git commit -m "Initial commit: Violin Practice Tracker with Supabase"
   git push -u origin main
   ```

3. Replace `YOUR_USERNAME` with your actual GitHub username and run the commands

## Step 3: Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "Import Project" or "New Project"
5. Find your `violin-practice-tracker` repository and click "Import"
6. Vercel will automatically detect it as a static site
7. Click "Deploy"
8. Wait 30-60 seconds for deployment to complete

## Step 4: Get Your Live URL

1. Once deployment is complete, you'll see a success screen
2. Vercel will provide a URL like: `https://violin-practice-tracker.vercel.app`
3. Click on the URL to open your live app!

## Step 5: Test Your App

1. Open the live URL in your browser
2. Try logging a practice session
3. Verify that data saves and loads correctly
4. Test from your phone to make sure it works on mobile too!

## What You Get

- **Live URL**: Access from anywhere with internet
- **Automatic HTTPS**: Secure connection
- **Free hosting**: No credit card required
- **Auto-updates**: Push to GitHub, Vercel auto-deploys
- **Global CDN**: Fast loading worldwide

## Updating Your App

Whenever you make changes:

1. Edit the files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. Vercel automatically redeploys (takes ~30 seconds)

## Custom Domain (Optional)

Want a custom URL like `violin.yourname.com`?

1. Buy a domain from Namecheap, Google Domains, etc.
2. In Vercel dashboard, go to your project
3. Click "Settings" > "Domains"
4. Add your domain and follow the instructions

## Troubleshooting

### App shows "Supabase not configured"
- Make sure you updated `js/config.js` with your real credentials
- Push the changes to GitHub
- Vercel will auto-redeploy

### Changes not showing up
- Check that you pushed to GitHub: `git push`
- Check Vercel dashboard for deployment status
- Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Data not saving
- Check browser console for errors (F12 > Console tab)
- Verify Supabase credentials are correct
- Make sure you ran the SQL setup from SUPABASE_SETUP.md

## Share Your App

Now you can share the Vercel URL with family members to track practice together!

## Security Note

Your Supabase anon key is safe to include in the deployed code - it's designed to be public. Row Level Security policies in Supabase protect your data.

For additional security (like user authentication), we can add that as a future enhancement!
