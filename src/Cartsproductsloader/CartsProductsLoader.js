import { getShoppingCart } from "../utilities/fakedb";

const CartsProductsLoader = async () =>{
    const LoadProducts = await fetch('products.json');
    const  products = await LoadProducts.json();
      

    const shortCard = getShoppingCart();
    const saveCart = [];

    for(const id in shortCard){
        const addedProduct = products.find(pd =>pd.id);
        if(addedProduct){
            const quantity = shortCard[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }




 return saveCart;
}

export default CartsProductsLoader;