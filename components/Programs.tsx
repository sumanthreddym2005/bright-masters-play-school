export default function Programs() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Our Programs
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Nursery</h3>
          Foundational learning through shapes, patterns, alphabets and numbers.
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Kindergarten</h3>
          Structured early academic development with creative activities.
        </div>
        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold mb-2">Day Care</h3>
          Full-day care with structured schedule and supervised playtime.
        </div>
      </div>
    </section>
  );
}