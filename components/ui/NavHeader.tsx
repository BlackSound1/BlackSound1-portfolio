import Link from "next/link";

export default function Header() {
  return (
    <div className="header sticky top-0 z-10 flex items-center justify-between p-5 select-none mb-[-5]">
      <nav className="font-mono">
        <Link className="navitem px-3 transition-colors duration-200 font-semibold text-accent" href="/">
          Home
        </Link>
      </nav>
      <nav className="font-mono">
        <Link className="navitem px-3 transition-colors duration-200" href="/research">
          Research
        </Link>
        <Link className="navitem px-3 transition-colors duration-200" href="/uses">
          Uses
        </Link>
        <Link className="navitem px-3 transition-colors duration-200" href="/links">
          Links
        </Link>
      </nav>
    </div>
  );
}
