export default function Reviews() {
  const testimonials = [
    "Flawless lines and spotless cleanup. Highly recommend!",
    "Professional, on time, and the finish looks incredible.",
    "Prep work was meticulous—paint still looks new months later.",
  ];
  return (
    <section id="reviews" className="bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">What Clients Say</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="p-5 rounded-lg border border-black/10 bg-white">
              <p className="text-sm">“{t}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


