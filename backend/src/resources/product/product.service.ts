import { PrismaClient, Product } from "../../generated/prisma";
import { ProductStatus } from "./product.constants";
import { createProductDto } from "./product.type";


const prisma = new PrismaClient();

export const getProduct = async() => {
    return prisma.product.findMany({
        where: {
            status: ProductStatus.active
        }
    });
}

export const findProductById = async (name: string): Promise<Product | null> => {
    return prisma.product.findFirst({
        where: {
            name
        }
    });
}

export const createProduct = async (product: createProductDto): Promise<Product> => {
    return prisma.product.create({
        data: {
            ...product,
            status: ProductStatus.active
        }
    });
}

export const removeProduct = async (id: string): Promise<Product | null> => {
    try {
        return prisma.product.update({
            where: {
                id
            },
            data: {
                status: ProductStatus.deleted
            }
        });
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const updateProduct = async (name: string, data: createProductDto): Promise<Product> => {
  try {
    return await prisma.product.update({
      where: { name }, // busca pelo nome
      data,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
