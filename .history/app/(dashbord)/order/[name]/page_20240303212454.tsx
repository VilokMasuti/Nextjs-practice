import Link from "next/link";
import React from "react";

const orders = () => {
  return (
    <div>
      orders :<Link href="order/order1"> order1</Link>
      orders :<Link href="order/order2"> order2 </Link>
    </div>
  );
};

export default orders;
