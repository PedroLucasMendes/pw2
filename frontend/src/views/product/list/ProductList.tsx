'use client';

import ProductCard from "./ProductCard";
import { ProductDto } from "../Product.types";
import { TextInput } from "flowbite-react";
import { useEffect, useState, useMemo } from "react";

interface ProductListProps {
  products: ProductDto[];
}

function ProductList({ products }: ProductListProps) {
  const [searchString, setSearchString] = useState("");

  // alternativa sem usar estados e com useMemo

  const filteredProducts = useMemo(() => products.filter(product =>
    product.name.toLowerCase().includes(searchString.toLowerCase())
  ), [products, searchString]);

  console.log("oi");

  return (
    <div>
      <div className="flex justify-between mb-2 items-center">
        <h1 className="text-2xl font-bold">Lista de produtos </h1>
        <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} className="w-80" type="text" placeholder="Buscar produto..." />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default ProductList;