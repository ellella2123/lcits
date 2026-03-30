import Navbar from "../components/layout/Navbar";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          Eliminate Laboratory Errors. Track Every Sample in Real-Time.
        </h1>
        <p className="mb-6 text-gray-400">
          Secure cloud-based laboratory tracking system.
        </p>
        <div className="flex gap-4">
          <button className="btn-primary">Start Free Trial</button>
          <button className="border border-gray-600 px-4 py-2 rounded-xl">
            View Demo
          </button>
        </div>
      </section>
    </div>
  );
}