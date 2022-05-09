import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import bannerImg1 from "../../img/banner/banner1.jpg";
import bannerImg2 from "../../img/banner/banner2.jpg";
import bannerImg3 from "../../img/banner/banner3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerImg1} alt="First slide" />
        <Carousel.Caption>
          <h3>C. J. Cherryh</h3>
          <p>
            Trade isn't about goods. Trade is about information. Goods sit in
            the warehouse until information moves them.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerImg2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Katharine Lee Bates</h3>
          <p>
            The life of Liverpool is commerce; it is a city of warehouses and
            shops.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={bannerImg3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Sebastian Junger</h3>
          <p>
            Firemen don't talk about whether a burning warehouse is worth
            saving.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
