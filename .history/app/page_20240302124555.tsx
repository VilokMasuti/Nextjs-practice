import Link from "next/link";

export default function About() {
  return (
    <h1 className=" flex items-center  mt-12 justify-center text-white font-bold">
      <Link href="projects/list" className="  text-white  mt-11">
        see projects
      </Link>
      Home
    </h1>
  );
}
