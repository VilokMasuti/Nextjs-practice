import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <p> next js</p>
        <ul>
            <Link href="/"><li> Home </li></Link>
            <Link href="/about"> <li> About</li></li></Link>


        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
