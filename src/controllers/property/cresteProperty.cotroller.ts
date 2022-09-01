import { Request, Response } from "express";
import createPropertyService from "../../services/property/createProperty.service";

async function createPropertyController(req: Request, res: Response){

    const { value, size, address, categoryId } = req.body

    const {district, zipCode, city, state, number} = address

    const property = await createPropertyService({ value, size, address, categoryId },{district, zipCode, city, state, number})

    return res.status(201).json(property)

}
 export default createPropertyController