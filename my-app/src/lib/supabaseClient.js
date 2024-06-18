import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dunjibshuaklyvzebddm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1bmppYnNodWFrbHl2emViZGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2OTEyNzQsImV4cCI6MjAzNDI2NzI3NH0.a7UKg5wgPEaP-cqQnyngZshMVUHkOFhJtlb6aGtw_ug';
export const supabase = createClient(supabaseUrl, supabaseKey);
