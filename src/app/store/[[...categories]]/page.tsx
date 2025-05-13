import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify";
import { ProductType } from "app/types/products";

interface CategoriesProps {
  params: {
    categories: string;
    searchParams?: string; 
  }
}  
async function Categories(props: CategoriesProps ) {
  const products: ProductType[] = await getProducts()

  return (
    <ProductsWrapper products={products}/>
  )
}

export default Categories