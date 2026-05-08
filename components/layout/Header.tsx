const navItems = [
  { label: "Beranda", href: "#" },
  { label: "Program", href: "#" },
  { label: "Persyaratan", href: "#" },
  { label: "Alur Pendaftaran", href: "#" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary shadow-sm">
            <span className="text-lg text-white">★</span>
          </div>
          <div className="text-xl font-bold tracking-wide text-primary-dark sm:text-2xl">
            PAUD PELANGI CERIA
          </div>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-slate-700 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="#"
            className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-primary-light"
          >
            Daftar Sekarang
          </a>

          <div className="h-8 w-px bg-slate-300" />

          <a
            href="#"
            className="text-base font-semibold text-secondary transition hover:text-primary"
          >
            Masuk
          </a>
        </div>

        <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}
