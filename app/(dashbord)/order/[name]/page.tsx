import Link from "next/link";
import React from "react";

const orders = ({ params }) => {
  return <div>orders : {params.name}</div>;
};

export default orders;
