export interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Variant[];
  options: Option[];
  images: Image[];
  image: Image;
}
export interface Variant {
  published_at: '2025-05-05T19:13:00-04:00',
}

export interface Option {
  id: number;
}

export interface Image {
  id: number;
  src: string;
}

