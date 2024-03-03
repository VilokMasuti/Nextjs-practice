import Link from "next/link";

export default function ProjectsList() {
  return (
    <>
      <h1 className=" flex items-center  mt-12 justify-center text-white font-bold">
        projectslist
      </h1>

      <Link href="projects/hare"> hare</Link>
      <Link href="projects/krishna"> krishna</Link>

      <Link href="projects/shiva"> shiva</Link>
    </>
  );
}
