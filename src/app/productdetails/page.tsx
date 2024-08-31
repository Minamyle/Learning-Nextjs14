import Product from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

export default function ProductDetails() {
  return (
    <div>
      <h1>product detail page</h1>
      <Suspense fallback={<p>Loading product details....</p>}>
        <Product />
      </Suspense>

      <Suspense fallback={<p>Loading Reviews.....</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
