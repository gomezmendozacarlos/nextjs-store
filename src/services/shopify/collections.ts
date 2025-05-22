import { env } from "app/config/env"
import { shopifyUrls } from "./urls"
import { Collections } from "app/types/products"

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN 
      })
    })
    const { smart_collections } = await response.json()
    
    const transformedCollections = smart_collections.map((collection: Collections): Pick<Collections, 'id' | 'title' | 'handle'> => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
      }
    })

    return transformedCollections

  } catch (error) {
    console.log(error)
  }
}