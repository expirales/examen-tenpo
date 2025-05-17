import Each from "../../common/Each";
import "./ProductsList.scss";
import PlaceholderIcon from "../../../assets/placeholder.png";
import { memo } from "react";
type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

type Meta = {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
};

type Review = {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
};

export type Product = {
  availabilityStatus: "In Stock" | string;
  brand: string;
  category: string;
  description: string;
  dimensions: Dimensions;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: Meta;
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
};

const ProductCard: React.FC<Product> = memo(function ProductCard({
  title,
  thumbnail,
  description,
}) {
  return (
    <article className="cnt-product-card">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="thumbnail"
        onError={(e) => {
          e.currentTarget.src = PlaceholderIcon;
        }}
      />
      <h6 className="name">{title}</h6>
      <p className="description">{description}</p>
    </article>
  );
});

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="cnt-product-list">
      <Each
        items={products}
        render={(item) => (
          <li key={item.id} className="product-item">
            <ProductCard {...item} />
          </li>
        )}
      />
    </ul>
  );
}
