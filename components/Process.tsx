export default function Process() {
  const steps = [
    { step: 1, title: "Consult", text: "We assess your goals and surfaces." },
    { step: 2, title: "Prep", text: "Protect, patch, sand, and prime thoroughly." },
    { step: 3, title: "Paint", text: "Apply premium Sherwin-Williams coatings." },
    { step: 4, title: "Walk‑through", text: "We review details and ensure a clean site." },
  ];
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold">Our Process</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="p-5 rounded-lg border border-black/10 bg-white">
            <div className="text-sm accent-gold font-semibold">Step {s.step}</div>
            <h3 className="mt-1 font-medium">{s.title}</h3>
            <p className="mt-2 text-black/70 text-sm">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


