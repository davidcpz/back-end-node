import { getAllProductsService, getProductByIdService } from "../servicios/products.service.js";
// get allproducts es una funcion que maneja todos los productos 
/*export const getAllProducts = async (req, res )=> {
    try {
        const products = await getAllProductsService();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos" });
    }
};*/

export const getProductById = async (req, res)=>{
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "ID del producto es requerido" });
        }
        const product = await getProductByIdService(id);
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({message: "producto no encontrado"});
        }
    }catch (error) {
        res.status(500).json({ message: "Error al obtener el producto" });
    }
};


export const getAllProducts = async (req, res) => {
    try {
        const categoria = req.query.categoria;
        const priceQuery = req.query.price;
        //si se paso el query de precio intentamos convertirlo a numero
        const products = await getProductsByFilter({category:categoria, price: priceQuery});
        //si no se encuentra productos con esos filtros devolvemos un error 404
        if (products.length === 0) {
            return res.status(404).json({ message: "No se encontraron productos con esos filtros" });
        }
        res.status(200).json(products);
    }


        if (priceQuery !== undefined) {
            price = Number(priceQuery);
        }

//si el query param price existe pero no es un numero valido devolvemos un error
        if (priceQuer !== undefined && Number.isNaN(price)) {
            return res.status(400).json({ error: "precio invalido" });

        }

        // si no se pasan filtros, devolvemos todos los productos
        if (categoryQuery===undefined && price === undefined) {
            const products = await getAllProductsService();
            return res.status(200).json(products);  
        }
        // si no se encuentra productos con esos filtros devolvemos un error 404
