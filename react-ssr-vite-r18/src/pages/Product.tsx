import React, { useState } from "react";
import Axios from 'axios';

const Product: any = () => {
  if (!Product.result) {
    Product.preLoader();
  }
  console.log(Product.result);
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1>About</h1>
      {JSON.stringify(Product.result)}
      {count}
    </div>
  )
}

Product.preLoader = () => {
  const fetchData = async () => {
    const { data } = await Axios(
      "https://randomuser.me/api/"
    );
    Product.result = data;
  };
  // 실행함으로써 데이타를 fetching합니다.
  fetchData();
}

export default Product;
