import { Product } from "../../generated/prisma";
import { Pick } from "@prisma/client/runtime/library";

export type createProductDto = Pick<Product, "name"| "description"| "stock" | "price" >;