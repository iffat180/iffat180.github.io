export default function Container({ children, className = "" }) {
  return (
    <div className={`rounded-2xl bg-neutral-900/70 shadow-lg ring-1 ring-white/10 ${className}`}>
      {children}
    </div>
  );
}
