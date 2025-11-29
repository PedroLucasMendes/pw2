'use client';

import CartItem from "./CartItem";
import { ProductDto } from "../product/Product.types";
import { TextInput } from "flowbite-react";
import { useEffect, useState, useMemo, useContext } from "react";
import { CartContext } from "@/providers/CartProvider/CartProvider";

interface CartProps {
  products: ProductDto[];
}

function Cart({ products }: CartProps) {
  const {cartProducts} = useContext(CartContext)

  const [searchString, setSearchString] = useState("");

  // alternativa sem usar estados e com useMemo

  const filteredProducts = useMemo(() => products.filter(product =>
    product.name.toLowerCase().includes(searchString.toLowerCase()) && cartProducts[product.id]
  ), [products, searchString, cartProducts]);


  const total = filteredProducts.reduce((
    acc, product) => acc + parseFloat(product.price) * cartProducts[product.id], 0);
  
  
  return (
    <div>
      <div className="flex justify-between mb-2 items-center">
        <h1 className="text-2xl font-bold">Lista de produtos </h1>
        <TextInput value={searchString} onChange={e => setSearchString(e.target.value)} className="w-80" type="text" placeholder="Buscar produto..." />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(p => <CartItem key={p.id} product={p} />)}
      </div>
      <div className="mt-2">Total: {total.toFixed(2)}</div>
    </div>
  );
}

export default Cart;