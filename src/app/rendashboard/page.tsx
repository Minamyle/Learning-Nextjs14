"use client";
import { useState } from "react";

export default function RendDashboard() {
  console.log("dashboard client component");
  const [name, Setname] = useState("");
  return (
    <div>
      <h1>this is a RendDashboard</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => Setname(e.target.value)}
      />
      <p>Hello,{name}!</p>
    </div>
  );
}
