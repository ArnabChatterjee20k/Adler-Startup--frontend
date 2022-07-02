import { createClient } from "@supabase/supabase-js";
const config = {
    supabaseUrl : "https://smyzdfsxxudirlgeooan.supabase.co",
    supabaseKey : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNteXpkZnN4eHVkaXJsZ2Vvb2FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY2ODQ3MzIsImV4cCI6MTk3MjI2MDczMn0.Ok52gZcUYt3eKql5NqLk0tuqT49PDFXdhGTUzRxAwjM"
}

const supabase = createClient(config.supabaseUrl,config.supabaseKey)

export default supabase;