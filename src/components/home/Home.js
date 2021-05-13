/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React, useState, useEffect } from "react";
import "./Cards.css";
import axios from "axios";
import useBaseUrl from "../../useBaseUrl";

function Home({ productsData }) {
  const baseUrl = useBaseUrl();
  const [slidersData, setSlidersData] = useState({});

  useEffect(() => {
    getSliders();
  });

  const getSliders = async () => {
    const { data } = await axios.get(`${baseUrl}/public/sliders`);

    if (slidersData.data) {
      if (slidersData.data.length !== data.data.length) {
        setSlidersData(data);
      }
    } else {
      setSlidersData(data);
    }
  };

  return (
    <>
      <div className="CarouselWraper">
        <Carousel className="carousel">
          {slidersData.data != null
            ? slidersData.data.map((item) => (
                <Carousel.Item interval={2000}>
                  <img
                    style={{ width: "100%", height: "auto" }}
                    className="carouselImg d-block mx-auto"
                    src={`${baseUrl}/${item.imageUrl}`}
                    alt={item.name}
                  />
                </Carousel.Item>
              ))
            : null}
        </Carousel>
      </div>

      <div class="cardWrapper">
        <div class="card-deck">
          {productsData.data != null
            ? productsData.data
                .slice(productsData.data.length - 3, productsData.data.length)
                .map((item) => (
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={`${baseUrl}/${item.imageUrl}`}
                      alt={item.name}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text">Price: {item.offerPrice}</p>
                    </div>
                  </div>
                ))
            : null}
        </div>
      </div>
    </>
  );
}
export default Home;
