import { fetchExternalImage } from "next/dist/server/image-optimizer";
import React from "react";  
import ProductDetails from "@/views/product/item/ProductDetails";
interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOCKER_API}/product/${id}`);
    const product = await response.json();
    return <ProductDetails product={product} />;
}

export default ProductPage;