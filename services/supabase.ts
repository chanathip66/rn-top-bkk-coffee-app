// ไฟล์ที่ใช้ตั้งค่าการเชื่อมต่อไปยัง Supabase ซึ่งต้องใช้ URL และ KEY ของ Supabase

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://vvoofjcgflssjxmpamic.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2b29mamNnZmxzc2p4bXBhbWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzODU2MzAsImV4cCI6MjA5Mzk2MTYzMH0.7VvkaOKDmvgII9OsFW6WDXqzQ6LRzrnT4CcyHhubFYc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
