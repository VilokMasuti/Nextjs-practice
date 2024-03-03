import Link from "next/link";
import React from "react";

const cart = () => {
  return (
    <div>
      {" "}
      Cart list
      <Link href="/cart/item1"> item</Link>
    </div>
  );
};

export default cart;
