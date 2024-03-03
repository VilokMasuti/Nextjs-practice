import Link from "next/link";
import styles from "./navbar.module.css";
export default function ProjectList() {
  return (
    <main>
      <h1 className=" flex items-center  mt-12 justify-center text-white font-bold">
        ProjectList
      </h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/projects/jobit">jobit</Link>{" "}
        </li>
      </ul>
    </main>
  );
}
