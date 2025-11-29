import { useState, useEffect } from 'react';
import type { Product } from '../../types/product.types';
import { getProducts } from '../../api/products';

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        console.log('📦 Products:', data);
        setProducts(data ?? []);
      } catch (e) {
        console.error('❌ Не вдалося завантажити товари:', e);
      }
    })();
  }, []);

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '24px',
      }}
    >
      {products.map((p) => {
        const img = p.product_images.find((i) => i.is_main)?.url;
        return (
          <li key={p.id}>
            <img
              src={img}
              width={200}
            />
            <h3>{p.title}</h3>
            <p>{p.price} грн</p>
          </li>
        );
      })}
    </ul>
  );
}
