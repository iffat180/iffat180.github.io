export default function Footer() {
  return (
    <footer className="mx-auto max-w-[820px] px-4 py-10 text-center text-sm text-gray-400">
      <div className="flex justify-center gap-8 mb-4">
        {/* Email */}
        <a href="mailto:iffat180@gmail.com" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z" />
          </svg>
        </a>
        {/* GitHub */}
        <a href="https://github.com/iffat180" target="_blank" rel="noreferrer" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1 .1 1.6-.9 1.6-.9.6-1.2 1.6-1.5 2-1.5.2-.5.5-1 .9-1.4-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.3-5.1 5.6.5.4.9 1.1.9 2.1v3.1c0 .3.2.7.8.6C20.7 21.4 24 17 24 12c0-6.35-5.15-11.5-12-11.5z" />
          </svg>
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/iffatmohd" target="_blank" rel="noreferrer" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.7 0 5-2.2 5-5V5c0-2.8-2.3-5-5-5zM7 19H4V9h3v10zm-1.5-11.4c-1 0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7 1.7.8 1.7 1.7-.8 1.7-1.7 1.7zM20 19h-3v-5.4c0-1.3-.4-2.2-1.5-2.2s-1.7.9-1.7 2.2V19h-3V9h3v1.3c.5-.9 1.4-1.6 2.8-1.6 2.1 0 3.4 1.4 3.4 4.3V19z" />
          </svg>
        </a>
      </div>
      <p className="text-xs">I can be reached at <a href="mailto:iffat180@gmail.com" className="underline">iffat180@gmail.com</a></p>
      <p className="text-xs mt-2">© {new Date().getFullYear()} Iffat Mohamed Ayub</p>
    </footer>
  );
}
