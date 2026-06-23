import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="py-10 px-30 bg-gray-200">
        <nav>
          <ul className="flex gap-5 text-xl justify-end font-bold uppercase">
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <Link to={"/about"}>about</Link>
            </li>
            <li>
              <Link to={"/contact"}>contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
