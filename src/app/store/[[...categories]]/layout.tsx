import { getCollections } from "app/services/shopify/collections";
import { Collections } from "app/types/products";
import { JSX } from "react";

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
    <main>
      <nav>
        {collections.map((collection) => (
          <a key={collection.id} href={`/store/${collection.handle}`}>
            {collection.title}
          </a>
        ))}
      </nav>
      {children}
    </main>
  );
}

export default Layout;
