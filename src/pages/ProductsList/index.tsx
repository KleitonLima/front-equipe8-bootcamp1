import { SearchIcon } from "assets/icons";
import ProductsCard from "components/ProductsCard";

import * as Styled from "./styles";
import meeting from "../../assets/imgs/meeting.png";
import Particle from "components/Particle";

interface ProductsListProps {
  logged?: boolean | any;
}

const ProductsList = ({ logged }: ProductsListProps) => {
  logged(true);

  return (
    <div>
      <Styled.LaterMenu>
        <Particle />
        <img src={meeting} alt="Metting foto" />
        <Styled.LaterMenuLetters>
          <h1>
            CloudWalk
            <hr />
            E-Commerce Manager
          </h1>
          <h4>
            Register new products, create <hr />
            promotions and update infromation on <hr />a single platform.
          </h4>
        </Styled.LaterMenuLetters>
      </Styled.LaterMenu>
      <Styled.HeaderProductList>
        <Styled.SearchProductList>
          <div>
            <SearchIcon />
          </div>
          <input type="text" />
        </Styled.SearchProductList>
        <button>Sort By</button>
      </Styled.HeaderProductList>
      <ProductsCard />
    </div>
  );
};

export default ProductsList;
