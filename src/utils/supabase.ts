import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl) {
  throw new Error(
    '❌ VITE_SUPABASE_URL не знайдений. Додай у файл .env.local\n' +
    'Наприклад:\nVITE_SUPABASE_URL=https://xxxxxxxx.supabase.co'
  )
}

if (!supabaseKey) {
  throw new Error(
    '❌ VITE_SUPABASE_ANON_KEY не знайдений. Додай у файл .env.local\n' +
    'Наприклад:\nVITE_SUPABASE_ANON_KEY=sb_publishable_xxxxx'
  )
}

export const supabase = createClient(supabaseUrl, supabaseKey);
