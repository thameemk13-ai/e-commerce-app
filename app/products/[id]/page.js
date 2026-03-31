import { products } from "@/data/products";

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id == params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}