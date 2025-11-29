import { supabase } from "../utils/supabase";
import type { Product } from "../types/product.types";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      product_images (url, is_main)
    `);

  if (error) throw new Error(error.message);
  return data ?? [];
}

