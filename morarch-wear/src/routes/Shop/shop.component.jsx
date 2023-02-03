import { useContext } from "react";
import { ProductsContext } from "../../context/productContext/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.style.scss';
const Shop=()=>{
    const { products } =useContext(ProductsContext);
    return(
        <div className="product-container">
            { products.map((products)=>(
                <ProductCard key={products.id} products={products} />
            ))
            }
        </div>
    );
  }
  export default Shop;