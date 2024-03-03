import Link from "next/link";
import { to } from './../../../../.next/server/vendor-chunks/next';

export default function Projects() {
  return (
    <h1 className=" flex items-center  mt-12 justify-center text-white font-bold"></h1>
    <Link to='projects/hi'></Link>
  );
}
