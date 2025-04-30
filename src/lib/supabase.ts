
import { createClient } from '@supabase/supabase-js';

// Set default values for Supabase connection
// These should be replaced with your actual Supabase project values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  produto_id: number;
  cod_barras: string;
  descricao_completa: string;
};

export async function getProducts(page: number = 1, pageSize: number = 20) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  
  const { data, error, count } = await supabase
    .from('dm_produto')
    .select('produto_id, cod_barras, descricao_completa', { count: 'exact' })
    .range(from, to);
  
  if (error) {
    console.error('Error fetching products:', error);
    return { products: [], count: 0 };
  }
  
  return { products: data as Product[], count };
}
