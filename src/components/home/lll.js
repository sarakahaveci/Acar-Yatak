import React from "react";
import Cards from "./Home";

function Home({productsData}) {
  return (
    <div>
      <Cards productsData={productsData} />
    </div>
  );
}

export default Home;
