import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import ProductCard from "../ProductCard";

const ProductList = ({ products }) => {
  return (
    <Container>
      <h2>Featured Products</h2>
      <Carousel>
        {products.slice(0, 3).map((product) => (
          <Carousel.Item key={product.id}>
            <img className="d-block w-100" src={product.image} alt={product.title} />
            <Carousel.Caption>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <h2>All Products</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
