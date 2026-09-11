import { PRODUCTS_DATA } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return <ProductDetailClient productId={resolvedParams.id} />;
}
