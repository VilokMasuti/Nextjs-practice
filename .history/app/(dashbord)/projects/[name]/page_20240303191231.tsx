import Link from "next/link";

export default function Projects({ params }) {
  return (
    <h1 className=" flex items-center  mt-12 justify-center text-white font-bold">
      {params.name}
    </h1>
  );
}
