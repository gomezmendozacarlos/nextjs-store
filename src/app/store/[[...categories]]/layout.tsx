import { getCollections } from "app/services/shopify/collections";
import { Collections } from "app/types/products";
import { JSX } from "react";
import styles from "./StoreLayout.module.sass";
import Link from "next/link";

async function Layout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const collections = (await getCollections()) as Pick<
    Collections,
    "id" | "title" | "handle"
  >[];

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={"/store/" + collection.handle}
              className={styles.StoreLayout__chip}
            >
              {collection.title}
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </main>
  );
}

export default Layout;
