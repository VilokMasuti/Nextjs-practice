import Link from "next/link";

export default function Projects() {
  return (
    <>
      <h1 className=" flex items-center  mt-12 justify-center text-white font-bold">
        projects list
      </h1>

      <Link href="projects/hare"> hare</Link>
    </>
  );
}
