import React from 'react'

interface CategoryProps {
  params: {
    category: string
  }
}
function Category(props: CategoryProps ) {
  const { category } = props.params
  
  return (
    <h1>
      Categoria Dinamica: {category}
    </h1>
  )
}

export default Category