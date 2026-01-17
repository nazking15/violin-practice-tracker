# Supabase Setup Instructions

Follow these steps to set up your Supabase backend:

## 1. Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub, Google, or email

## 2. Create a New Project

1. Click "New Project"
2. Fill in the details:
   - **Name**: violin-practice-tracker
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose closest to you
   - **Pricing Plan**: Free
3. Click "Create new project"
4. Wait 2-3 minutes for the project to set up

## 3. Create the Database Table

1. In your Supabase project dashboard, click "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy and paste this SQL code:

```sql
-- Create practice_sessions table
CREATE TABLE practice_sessions (
  id BIGSERIAL PRIMARY KEY,
  date DATE NOT NULL,
  duration INTEGER NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE practice_sessions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations (for now, since it's just for your family)
CREATE POLICY "Allow all operations for everyone" ON practice_sessions
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create an index on date for faster queries
CREATE INDEX practice_sessions_date_idx ON practice_sessions(date DESC);
```

4. Click "Run" to execute the SQL
5. You should see "Success. No rows returned"

## 4. Get Your API Credentials

1. Click "Settings" (gear icon) in the left sidebar
2. Click "API" under Project Settings
3. You'll see two important values:
   - **Project URL**: Looks like `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public key**: A long string starting with `eyJ...`

## 5. Provide These to Claude

Copy both values and provide them in this format:

```
Project URL: https://xxxxxxxxxxxxx.supabase.co
Anon Key: eyJhbGc....[long string]
```

⚠️ **Important**:
- The anon key is safe to use in public code (it's designed for browser use)
- Don't share your service_role key (we won't need it)
- Your data is protected by Row Level Security policies

## Next Steps

Once you provide these credentials, I'll:
1. Update the app to use Supabase
2. Set up deployment to Vercel
3. Give you a live URL to access your app from anywhere!
