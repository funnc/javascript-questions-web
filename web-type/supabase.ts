import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://udiqobkkatfefdhexezc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(
  supabaseUrl,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkaXFvYmtrYXRmZWZkaGV4ZXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc1MjcyMDQsImV4cCI6MTk4MzEwMzIwNH0.hh-rQULAlPTWJeUpuXnFbc1PU0ZmSM3FovtchuJ30Ec'
);

export default supabase;
