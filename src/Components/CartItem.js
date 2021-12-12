import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";
// cartItems
//Adding products 
const CartItem = ({name, product, addInCart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle> Brand - {product.productName}</CardTitle>
        <CardText className="secondary">
          price: RS {product.productPrice}
        </CardText>
        <cardText>  Seller : {product.ownerName}  </cardText>
        <br></br>
        <Button color="success" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
