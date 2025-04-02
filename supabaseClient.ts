import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://atxjhcjpedcbrwzztkst.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0eGpoY2pwZWRjYnJ3enp0a3N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNTI1NjcsImV4cCI6MjA1ODkyODU2N30.6Z-5J2CfUiublzUOFgaVBnqZ-Xl7IMqGiFF65ZCp7vY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
