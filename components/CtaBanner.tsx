export default function CtaBanner() {
  return (
    <section id="estimate" className="py-16" style={{ backgroundColor: "#0B5D3B" }}>
      <div className="mx-auto max-w-6xl px-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold">Ready to transform your home?</h3>
        <a href="#contact" className="btn-primary rounded-md px-5 py-3 font-medium bg-white text-[var(--brand-green)] hover:bg-white/90">
          Request a Free Estimate
        </a>
      </div>
    </section>
  );
}


