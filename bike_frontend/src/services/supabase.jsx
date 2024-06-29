
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faimdjomseuebpwzhccq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhaW1kam9tc2V1ZWJwd3poY2NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxOTg3MDUsImV4cCI6MjAzNDc3NDcwNX0.jiI8s9EgiOqYOz0iMBcoANq-LoGWF8qwqwMrqtm2O9E';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
