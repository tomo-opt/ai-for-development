import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ujmsyxuvrewbdmnvahre.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqbXN5eHV2cmV3YmRtbnZhaHJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2NDUyMzAsImV4cCI6MjA2MjIyMTIzMH0.RpUvD6ugWLbTEbJP17PSedqX_yEs3xNS7Bsm4UkPqA4'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
