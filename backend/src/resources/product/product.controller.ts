import { Request, Response } from "express"
import { createProduct, getProduct, findProductById, removeProduct, updateProduct } from "./product.service"
import { createProductDto } from "./product.type";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const index = async (req: Request, res: Response) => {
    const product = await getProduct();
    res.json(product);
}


const create = async (req: Request, res: Response) => {
    const product = req.body as createProductDto;
    try {
        if (await findProductById(product.name)) {
            return res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
        const newProduct = await createProduct(product);
        res.status(StatusCodes.CREATED).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }

}

const read = async (req: Request, res: Response) => {
  const { name } = req.params; // rota deve ser /products/:name
  try {
    const product = await findProductById(name);
    if (!product) {
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    }
    res.status(StatusCodes.OK).json(product);
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const update = async (req: Request, res: Response) => {
  const { name } = req.params;
  const data = req.body as createProductDto;
  try {
    const existing = await findProductById(name);
    if (!existing) {
      return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    }
    const updated = await updateProduct(name, data);
    res.status(StatusCodes.OK).json(updated);
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        if (!id) { return res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST); }
        await removeProduct(id);
        res.status(StatusCodes.OK).json(ReasonPhrases.OK);

    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}


export default { index, create, read, update, remove }
