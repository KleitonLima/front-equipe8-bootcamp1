import { SearchIcon } from "assets/icons";
import DeleteProductModal from "components/Modal/DeleteProductModal";
import ProductModal from "components/Modal/ProductModal";
import ProductSettingsCard from "components/ProductSettingsCard";
import SettingsMenu from "components/SettingsMenu";
import { useProducts } from "contexts/products";
import { useEffect, useState } from "react";
import { Product } from "types";
import * as styled from "./styles";
import * as gStyled from "../../assets/styles/globalStyles";
import backgroundProduct from "../../assets/imgs/product-settingsbg.png";
import ConfirmModal from "components/Modal/ConfirmModal";

const ProductSettings = () => {
  const { products } = useProducts();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [search, setSearch] = useState("");
  const [state, setState] = useState(false);

  /* ----MODAL---    */
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  /* --------- */

  const { handleGetProducts } = useProducts();

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts, state]);

  return (
    <gStyled.SettingsContainer
      style={{ backgroundImage: `url(${backgroundProduct})` }}
    >
      <SettingsMenu path={"products"} />
      <gStyled.EditEntitiesContainer>
        <h2>Manage Products</h2>

        <styled.SettingsNav>
          <styled.AddEntitieCard onClick={handleOpenModal}>
            <p>Create Product</p>
          </styled.AddEntitieCard>
          <gStyled.SearchProduct>
            <div>
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search by NFT name..."
              onChange={(event) => setSearch(event.target.value)}
            />
          </gStyled.SearchProduct>
        </styled.SettingsNav>
        <styled.Bar />
        <styled.Header>
          <h2>Code</h2>
          <h2>Name</h2>
          <h2>Category</h2>
          <h2>Price</h2>
          <h2>Image</h2>
          <div>
            <h2>Action</h2>
          </div>
        </styled.Header>
        <styled.Bar />
        <styled.EntitiesList>
          {products
            .filter((element) => {
              if (element.name.toLowerCase().includes(search.toLowerCase())) {
                return element;
              } else return false;
            })
            .map((element) => (
              <ProductSettingsCard
                handleOpenModal={handleOpenModal}
                handleOpenDeleteModal={handleOpenDeleteModal}
                setProduct={setProduct}
                product={element}
                key={element.id}
              />
            ))}
        </styled.EntitiesList>
      </gStyled.EditEntitiesContainer>

      {openModal && (
        <ProductModal
          setProduct={setProduct}
          product={product}
          handleOpenModal={handleOpenModal}
        />
      )}

      {openDeleteModal && (
        <DeleteProductModal
          setProduct={setProduct}
          productId={product?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}

      {false && <ConfirmModal setState={setState} />}
    </gStyled.SettingsContainer>
  );
};

export default ProductSettings;
