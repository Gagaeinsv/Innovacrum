// src/supabase/config.js
import { createClient } from '@supabase/supabase-js';

// Для Create React App змінні оточення мають починатися з REACT_APP_
const supabaseUrl = 'https://komcmxajgcjqhdkhltwt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvbWNteGFqZ2NqcWhka2hsdHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNTE5MzAsImV4cCI6MjA2MTkyNzkzMH0.PDuFb_CLORuRq1IzJdtgEfL1rR8O1XptASk7qL_CHMo';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key is defined:', !!supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;