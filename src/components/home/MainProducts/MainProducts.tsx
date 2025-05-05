const getProducts  = async () => {  
  const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2025-04/products.json`, {
    method: 'GET',
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || '',
      'Content-Type': 'application/json',
    },  
  });
  const data = await response.json();
  return data;
}

async function MainProducts() {
  const products = await getProducts();
  console.log(products);
  return (
    <h2>
      Main Products
    </h2>
  )
}

export default MainProducts
