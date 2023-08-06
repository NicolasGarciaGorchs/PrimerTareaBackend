class ProductManager {

    constructor(){
            this.id = 0;
            this.products = [];
            this.getProducts();
    }

    addProduct(title,description, productN, price, thumbnail, code, stock){
        if (this.products.length === 0) {
            this.id = 0;
        }else{
            this.id = this.id + 1;
        }

        if (this.getProductByCode(code) === false) {
        this.products.push({
            id: this.id, 
            title: title, 
            description: description, 
            productN: productN, 
            price: price, 
            thumbnail: thumbnail, 
            code:code, 
            stock: stock
        });  
        }else {
            console.log(`The product with code: ${code} ` + `exists.`);
        }

    }

    getProductByCode(code) {
        const resultado = this.products.find((product) => product.code === code);
        if (resultado === undefined) {
            return false;
        }
    }

    getProductById(id) {
        const resultado = this.products.find((product) => product.id === id);
        if (resultado === undefined) {
            return "Not Found";
        } else {
            return resultado;
        }
    }

    getProducts(){
        return this.products;
    }
}

const product = new ProductManager();
console.log(product);

product.addProduct("PruebaProducto0", "Producto 0", "Producto 0", 10, "pruebaproducto0", "000001", 12); 
product.addProduct("PruebaProducto1", "Producto 1", "Producto 1", 11, "pruebaproducto1", "000002", 14); 
product.addProduct("PruebaProducto2", "Producto 2", "Producto 2", 12, "pruebaproducto2", "000003", 16); 
product.addProduct("PruebaProducto3", "Producto 3", "Producto 3", 13, "pruebaproducto3", "000004", 18); 
product.addProduct("PruebaProducto1", "Producto 1", "Producto 1", 11, "pruebaproducto1", "000002", 14); 

console.log(product.getProducts());
console.log(product.getProductById(3));
console.log(product.getProductById(4));