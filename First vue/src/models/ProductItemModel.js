function ProductItem(id, name, price, qty, description, image)
{
    this.id = id ?? '';
    this.name = name ?? '';
    this.price = price ?? '';
    this.qty =  qty ?? '';
    this.description =  description ?? '';
    this.image =  image ?? '';
}

export default ProductItem