import React from "react";

export const reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return <div>reviews</div>;
};

export default reviews;
