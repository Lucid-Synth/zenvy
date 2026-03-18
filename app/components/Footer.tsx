

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-linear-to-br from-[#a78bfa] to-[#6366f1] text-white text-xs font-black">Z</span>
          <span className="font-semibold text-white">Zenvy</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-zinc-600">
          {["Privacy", "Terms", "Status", "Docs", "Twitter", "GitHub"].map((l) => (
            <a key={l} href="#" className="hover:text-zinc-400 transition-colors">{l}</a>
          ))}
        </div>
        <p className="text-xs text-zinc-700">© {new Date().getFullYear()} Zenvy, Inc.</p>
      </div>
    </footer>
  );
}