import Image from 'next/image'
import styles from './MainProducts.module.sass'
import { Product } from '../../../types/products'
import { getProducts } from '../../../services/shopify/index'
  
const MainProducts = async () => {
  const products: Product[] = await getProducts()
  
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: Product) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default MainProducts