import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rfwvnybgvcocyprfhjee.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmd3ZueWJndmNvY3lwcmZoamVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1OTU3NTUsImV4cCI6MjAyMzE3MTc1NX0.c6PEx4d38UoJfiDhSpoIfVhQabKLaISeHkvtDE1NeO8'
const supabase = createClient(supabaseUrl, supabaseKey)
const STORAGE_BUCKET = '' // your storage bucket name
const BEARER_TOKEN = '' // your bearer token

export interface Bucket {
    
}