import { useEffect, useState, useCallback } from "react";
import Navbar from "../components/layout/Navbar";
import homeIcon from "../assets/home.png";
import ProductList, {
  type Product,
} from "../components/modules/products/ProductList";
import * as productOperator from "../operators/productOperator";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import RenderIf from "../components/common/RenderIf";
import "./HomePage.scss";
import Modal from "../components/ui/Modal";
import InfoApp from "../components/InfoApp";
export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isShowInfoModal, setIsShowInfoModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setPage] = useState(0);

  const fetchProducts = useCallback(
    async () => {
      const response = await productOperator.loadProducts(/* page */); // <- page viene de tu operador
      setProducts((prev) => [...prev, ...response.data.products]);
    },
    [
      /* page */
    ]
  );

  useInfiniteScroll({
    callback: () => setPage((prev) => prev + 1),
    offset: 200, // px antes de llegar al final
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleOpenCloseInfoModal = () => setIsShowInfoModal(!isShowInfoModal);
  return (
    <div className="cnt-home-page">
      <Navbar title="Home" icon={homeIcon} />
      <ProductList products={products} />

      <button className="info-btn" onClick={handleOpenCloseInfoModal}>
        ?
      </button>
      <RenderIf condition={isShowInfoModal}>
        <Modal onClose={handleOpenCloseInfoModal}>
          <InfoApp />
        </Modal>
      </RenderIf>
    </div>
  );
}
