import Link from "next/link";
import React from "react";

const cart = () => {
  return (
    <div>
      Cart list
      <Link href="/cart/item1"> item1</Link>
      <Link href="/cart/item2"> item2</Link>
      <Link href="/cart/item2"> item2</Link>
    </div>
  );
};

export default cart;
