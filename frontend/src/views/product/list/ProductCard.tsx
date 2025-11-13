"use client";

import { Card } from "flowbite-react";
import { use, useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "../../product/Product.module.css";
import { ProductDto } from "../Product.types";

interface ProductCardProps {
  product: ProductDto;
}

function ProductCard({ product }: ProductCardProps) {

    const [qtdCart, setQtdCart] = useState<number>(0);
    // Forma que ao clicar não redireciona para a página do produto
    const decreaseCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setQtdCart((p) => Math.max(p - 1, 0));
    };
    
    const increaseCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setQtdCart((p) => Math.min(p + 1, 100));
    };


    /* Forma do professor
    const decreaseCart = () => setQtdCart((p) => Math.max(p - 1, 0));
    const increaseCart = () => setQtdCart((p) => Math.min(p + 1, 100));
    */

    return (
        <Card href={`/product/${product.id}`} className="max-w-sm">
        <div className=" flex flex-col justify-between h-full">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {product.description}
            </p>
            <p className="flex gap-2 aligns-center">
                <button className={styles.buttonIcon} onClick={decreaseCart} disabled={qtdCart === 0}><FaMinus /></button>
                {qtdCart}
                <button className={styles.buttonIcon} onClick={increaseCart} disabled={qtdCart === 100}><FaPlus /></button>
            </p>
        </div>
        </Card>
    );
}

export default ProductCard;
