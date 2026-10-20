export default function LinkPills({ links, className = "" }) {
  if (!links?.length) return null;
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-300 transition-colors duration-300 hover:bg-gold-500 hover:text-ink-950"
          >
            {link.label} ↗
          </a>
        </li>
      ))}
    </ul>
  );
}
