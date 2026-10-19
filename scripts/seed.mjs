import { config } from 'dotenv';
config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';
import { LISTINGS } from '../data/listings.ts'; // ⚠️ قد لا يعمل مباشرة بسبب TypeScript
import fs from 'fs';
import path from 'path';

// Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Load listings from TS file (using regex or convert to JSON first)
// ⚠️ This is a workaround. Better: convert data to JSON.

console.log('Script ready. We will convert data/listings.ts to JSON first.');