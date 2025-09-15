import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const LinkItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-none md:backdrop-blur border-b border-white/10 text-[16px]">
      <nav className="mx-auto max-w-[805px] px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-semibold tracking-widest no-underline">
          Iffat.
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          <LinkItem to="/">about</LinkItem>
          <LinkItem to="/projects">projects</LinkItem>
          <LinkItem to="/blog">blog</LinkItem>
          <LinkItem to="/github">github</LinkItem>
          <LinkItem to="/cv">cv</LinkItem>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger / Close icons */}
          <svg
            className={`h-6 w-6 ${open ? "hidden" : "block"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? "block" : "hidden"}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
      >
        {/* Dim background (solid-ish) */}
        <div
          className={`absolute inset-0 bg-black/80 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sheet (solid panel) */}
        <div
          className={`ml-auto h-full w-[85%] max-w-xs bg-neutral-950 overflow-y-auto
                      border-l border-white/10 shadow-xl transition-transform duration-200 ease-out
                      ${open ? "translate-x-0" : "translate-x-full"}`}
          role="dialog"
          aria-modal="true"
        >
          <div className="h-14 px-4 flex items-center justify-between border-b border-white/10">
            <span className="font-semibold tracking-widest">Menu</span>
            <button
              className="inline-flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-2 py-3 flex flex-col gap-1">
            <LinkItem to="/" onClick={() => setOpen(false)}>about</LinkItem>
            <LinkItem to="/projects" onClick={() => setOpen(false)}>projects</LinkItem>
            <LinkItem to="/blog" onClick={() => setOpen(false)}>blog</LinkItem>
            <LinkItem to="/github" onClick={() => setOpen(false)}>github</LinkItem>
            <LinkItem to="/cv" onClick={() => setOpen(false)}>cv</LinkItem>
          </nav>
        </div>
      </div>
    </header>
  );
}
