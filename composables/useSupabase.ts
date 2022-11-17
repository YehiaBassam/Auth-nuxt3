import { createClient } from '@supabase/supabase-js'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5YmJhZWhoa2tlbHhoYmlubXVsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2ODYyMzM3OCwiZXhwIjoxOTg0MTk5Mzc4fQ.MzNHjAi-RkFxlVBTT8cyN9N8DlL9cVev9m-6YJpiQDg"
const supabaseUrl = 'https://gybbaehhkkelxhbinmul.supabase.co'

const supabase = () => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  return { supabase }
}

export default supabase;