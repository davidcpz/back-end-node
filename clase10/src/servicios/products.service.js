import {getAllProducts, getProductById} from "../modelos/products.modelo.js";

/*const products =[
    {id: 1, name : 'producto 1', price: 100},
    {id: 2, name : 'producto 2', price: 200},  
];

export const getAllProductsService=()=>{
    return products;
};
*/
export const getProductByIdService= async (id)=>{
    return await getProductById(id)
};

export const getProductsByFilter = async (category, price)=>{
    if (category === undefined && price === undefined) {
        return await getAllProducts();

    }};
    const products = await getAllProducts();
    //filtramos los productos segun los filtros de categoria y precio
    return products.filter(product => {
        //empezamos asumiendo que el producto cumple con los filtros
        let match = true;

        //si se pasa categoria, verificamos que el producto tenga esa categoria
        if (category !== undefined) {
            // si match = true, match se mantiene true si el producto tiene la categoria, sino se vuelve false
            match = match && product.category === category;
        }

        //Si se pasa preccio, verificamos que el producto tenga ese precio
        //Si match ya es false, permanece false 
        if (price !== undefined) {
            match = match && product.price <= price;
        }

        // al final, devolemos true si el producto cumple con todos los filtros, sino devolvemos false
        return match;
    }
);  
