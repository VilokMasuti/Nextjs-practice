import Link from "next/link";

export default function Projects({ Prams }) {
  return (
    <h1 className=" flex items-center  mt-12 justify-center text-white font-bold">
      {Prams.name}
    </h1>
  );
}
