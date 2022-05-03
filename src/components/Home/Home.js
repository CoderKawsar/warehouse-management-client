import React from "react";
import { Container, Row } from "react-bootstrap";
import useProducts from "../../hooks/useProducts";
import Banner from "../Banner/Banner";
import InventoryItem from "../InventoryItem/InventoryItem";
import "./Home.css";

const Home = () => {
  const [products] = useProducts(6);
  return (
    <div>
      <Banner></Banner>
      <Container className="mt-5">
        <Row xs={1} sm={2} md={3} lg={3}>
          {products.map((product) => (
            <InventoryItem key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
