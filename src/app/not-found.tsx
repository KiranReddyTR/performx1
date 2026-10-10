import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container text-center">
        <div className="relative mb-10">
          <div className="text-[160px] md:text-[220px] font-black leading-none select-none"
            style={{ color:"rgba(255,255,255,0.02)", WebkitTextStroke:"1px rgba(116,21,253,0.08)" }}
            aria-hidden="true">
            404
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Page{" "}
              <span style={{ background:"linear-gradient(90deg,#7415FD,#36C2FE)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                not found.
              </span>
            </h1>
            <p className="text-white/40 mb-10 max-w-sm mx-auto">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm"
            style={{ background:"linear-gradient(135deg,#7415FD,#A838FD,#3D5BFD)" }}>
            Back to Homepage
          </Link>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white/70 font-semibold text-sm border border-white/10 hover:border-white/20 hover:text-white transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
