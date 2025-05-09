interface CategoriesProps {
  params: {
    categories: string;
    searchParams?: string; 
  }
}
function Categories(props: CategoriesProps ) {
  const { categories } = props.params
  return (
    <h1>
      Categoria Dinamica: {categories}
    </h1>
  )
}

export default Categories