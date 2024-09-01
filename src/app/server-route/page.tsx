import ImageSlider from "@/components/ImageSlider";

import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
  console.log("server route rendered");
  const result = serverSideFunction();

  return (
    <>
      <h1>server route page</h1>
      <p>{result}</p>
      <ImageSlider />
    </>
  );
}
