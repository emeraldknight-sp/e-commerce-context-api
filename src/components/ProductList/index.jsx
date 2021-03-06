import { useContext } from "react";

import { BooksOnVitrineContext } from "../../providers/BooksOnVitrine";
import { ProductsOnCartContext } from "../../providers/BookOnCart";
import Button from "../Button";
import { StyledItem, StyledList } from './style';

const ProductList = ({ type }) => {
  const books = useContext(BooksOnVitrineContext);
  const cart = useContext(ProductsOnCartContext);

  return (
    <StyledList>
      {type === "vitrine" &&
        books.books.map((book, index) => (
          <StyledItem key={index}>
            {/* IMAGE */}
            <img src={book.image} alt={book.name} />
            {/* NAME */}
            {book.name} 
            {/* PRICE */}
            {book.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            {/* BUTTON */}
            <Button type="vitrine" item={book}/>
          </StyledItem>
        ))}
      {type === "cart" &&
        cart.productsOnCart.map((product, index) => (
          <StyledItem key={index}>
            {/* IMAGE */}
            <img src={product.image} alt={product.name} />
            {/* NAME */}
            {product.name} 
            {/* PRICE */}
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            {/* BUTTON */}
            <Button type="cart" item={product}/>
          </StyledItem>
        ))}
    </StyledList>
  );
};

export default ProductList;
