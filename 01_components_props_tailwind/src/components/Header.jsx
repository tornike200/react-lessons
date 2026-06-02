import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="px-25 py-20 bg-amber-400 flex justify-between items-center">
        <Logo />
        <NavBar />
      </header>
    </>
  );
}
