-- Add behavior tracking columns to practice_sessions table
-- Run this in your Supabase SQL Editor

ALTER TABLE practice_sessions
ADD COLUMN IF NOT EXISTS well_behaved BOOLEAN DEFAULT true,
ADD COLUMN IF NOT EXISTS behavior_notes TEXT;

-- Add a comment to document the columns
COMMENT ON COLUMN practice_sessions.well_behaved IS 'Whether the child was well behaved during practice';
COMMENT ON COLUMN practice_sessions.behavior_notes IS 'Notes about behavior if not well behaved';
