"use client";

import { Card } from "flowbite-react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "../../product/Product.module.css";
import { ProductDto } from "../Product.types";

interface ProductCardProps {
  product: ProductDto;
}

function ProductCard({ product }: ProductCardProps) {

    const [qtdCart, setQtdCart] = useState<number>(0);

    const decreaseCart = () => setQtdCart((p) => Math.max(p - 1, 0));
    const increaseCart = () => setQtdCart((p) => Math.min(p + 1, 100));


    return (
        <Card href="#" className="max-w-sm">
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
        </Card>
    );
}

export default ProductCard;
