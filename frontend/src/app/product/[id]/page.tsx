import { fetchExternalImage } from "next/dist/server/image-optimizer";
import React from "react";  

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
    const product = await response.json();
  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default ProductPage;