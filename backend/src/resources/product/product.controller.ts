import { Request, Response } from "express"
import { createProduct, getProduct, findProductById, removeProduct } from "./product.service"
import { createProductDto } from "./product.type";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const index = async (req: Request, res: Response) => {
    const product = await getProduct();
    res.json(product);
}


const create = async (req: Request, res: Response) => {
    const product = req.body as createProductDto;
    try {
        if(await findProductById(product.name)) {
            return res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
        const newProduct = await createProduct(product);
        res.status(StatusCodes.CREATED).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }

}


const read = async (req: Request, res: Response) => {}
const update = async (req: Request, res: Response) => {}


const remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {

        if(!id) { return res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST); }
        await removeProduct(id);
        res.status(StatusCodes.OK).json(ReasonPhrases.OK);

    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
}


export default { index, create, read, update, remove }
