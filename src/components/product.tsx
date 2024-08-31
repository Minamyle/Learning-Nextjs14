import React from "react";

export const product = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>product</div>;
};

export default product;
