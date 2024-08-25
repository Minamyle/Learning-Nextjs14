import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
    </div>
  );
}

export default ProductDetails;
