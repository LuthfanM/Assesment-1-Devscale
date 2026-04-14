import Link from "next/link";

const footerLinks = {
  Navigasi: ["Beranda", "Program", "Persyaratan", "Pendaftaran"],
  Informasi: ["Tentang Kami", "Visi & Misi", "FAQ", "Kontak"],
  Bantuan: ["Panduan Orang Tua", "Kebijakan Privasi", "Syarat & Ketentuan"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
              <span className="text-lg text-white">★</span>
            </div>
            <h3 className="text-xl font-bold text-primary-dark">PAUD PELANGI CERIA</h3>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
            Tempat belajar yang nyaman, aman, dan menyenangkan untuk mendukung
            tumbuh kembang anak sejak usia dini.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-base font-semibold text-secondary">{title}</h4>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-slate-500 transition hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-5 text-sm text-slate-500 md:flex-col lg:px-8">
          <p>© {currentYear} PAUD Pelangi Ceria. All rights reserved.</p>
          <p>Multimedia Paud.</p>
        </div>
      </div>
    </footer>
  );
}