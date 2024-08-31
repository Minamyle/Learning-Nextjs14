import { cookies } from "next/headers";

export default function AboutRend() {
  const cookiesStore = cookies();
  const theme = cookiesStore.get("theme");
  console.log(theme);
  console.log("this is a server component");
  return (
    <h1>About Rending server component {new Date().toLocaleTimeString()}</h1>
  );
}
