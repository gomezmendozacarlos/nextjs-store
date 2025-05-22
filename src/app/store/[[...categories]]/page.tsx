import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import {
  getCollections,
  getCollectionProducts,
} from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";
import { Collections, ProductType } from "app/types/products";

interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}
async function Categories({ params }: CategoriesProps) {
    const resolvedParams = await params;
  const { categories } = resolvedParams;
  
  let products: ProductType[] = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: Pick<Collections, "id" | "title" | "handle">) =>
        collection.handle === categories[0]
    )?.id;

    if (selectedCollectionId) {
      products = await getCollectionProducts(selectedCollectionId);
    }
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
}

export default Categories;
