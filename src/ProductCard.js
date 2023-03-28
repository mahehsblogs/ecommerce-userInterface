import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="h-100">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <Card.Img variant="top" src={product.image} />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="flex-grow-1">{product.price}</Card.Text>
        <button className="btn btn-primary mt-auto">Add to Cart</button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
