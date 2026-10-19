import { config } from 'dotenv';
config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('URL:', supabaseUrl ? '✅ Loaded' : '❌ Missing');
console.log('Key:', supabaseKey ? '✅ Loaded' : '❌ Missing');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing env variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const { data, error, count } = await supabase
  .from('listings')
  .select('*', { count: 'exact', head: true });

if (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

console.log('✅ Connected! Listings count:', count);