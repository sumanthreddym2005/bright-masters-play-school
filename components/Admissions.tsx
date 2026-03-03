import AdmissionForm from "./AdmissionForm";

export default function Admissions() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Admissions</h2>
      <p className="mb-6">
        Minimum Age: 2.5 Years • Structured Admission Process
      </p>
      <AdmissionForm />
    </section>
  );
}