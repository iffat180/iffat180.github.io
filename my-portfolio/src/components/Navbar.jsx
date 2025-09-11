import { NavLink } from "react-router-dom";

const LinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-1 rounded-lg transition ${
        isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 text-[16px]">
      <nav className="mx-auto max-w-[805px] px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-semibold tracking-widest no-underline">
          Iffat.
        </NavLink>
        <div className="flex items-center gap-1">
          <LinkItem to="/">about</LinkItem>
          <LinkItem to="/projects">projects</LinkItem>
          <LinkItem to="/blog">blog</LinkItem>
          <LinkItem to="/github">github</LinkItem>
          <LinkItem to="/cv">cv</LinkItem>
        </div>
      </nav>
    </header>
  );
}
