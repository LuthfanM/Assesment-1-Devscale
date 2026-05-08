import heroImage from "../../assets/school_kid.png";

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-bg text-xs text-accent">
        ✓
      </div>
      <span className="text-sm font-medium text-slate-600 sm:text-base">{text}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-14 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <div className="inline-flex rounded-full bg-warning-bg px-5 py-3 text-sm font-semibold text-warning-text shadow-sm">
            ✨ Pendaftaran Tahun Pelajaran 2025/2026 Telah Dibuka!
          </div>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-secondary sm:text-6xl">
            Sistem Penerimaan
            <br />
            <span className="text-primary">Murid Baru (SPMB)</span>
            <br />
            Jenjang PAUD
          </h1>

          <p className="mt-6 max-w-lg text-xl leading-9 text-slate-500">
            Bermain, belajar, dan berkreasi dalam lingkungan yang aman dan penuh
            kasih sayang. Mari wujudkan potensi emas anak Anda bersama kami.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:bg-primary-light"
            >
              Mulai Pendaftaran <span className="ml-2">→</span>
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-secondary shadow-sm transition hover:border-border-light hover:text-primary"
            >
              Lihat Program <span className="ml-2">📖</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            <FeatureItem text="Kuota Terbatas" />
            <FeatureItem text="Akreditasi C" />
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[640px]">
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-[40px] bg-decorative" />
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-[40px] bg-decorative" />

            <div className="relative overflow-hidden rounded-[36px] border-[10px] border-white bg-white shadow-xl">
              <img
                src={heroImage}
                alt="Ilustrasi siswa PAUD"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-4 rounded-[24px] bg-white px-5 py-4 shadow-xl sm:bottom-6 sm:left-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-trophy-bg text-2xl">
                🏆
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">15+ Tahun</p>
                <p className="text-base text-slate-500">Pengalaman Mengajar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
