import AIChat from "./AIChat";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h2 className="text-2xl font-bold text-cyan-300">
          CORE SITE
        </h2>

        <div className="flex gap-8">
          <a href="#">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#ai">AI Employee</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Core Site Agency LLC
        </p>

        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
          Modern websites with AI employees that work 24/7.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          We build sleek websites for small businesses, with AI assistants that
          answer questions, recommend services, qualify leads, and help convert
          visitors into customers.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="tel:4703711587"
            className="rounded-full bg-cyan-300 px-7 py-4 font-bold text-slate-950"
          >
            Call 470-371-1587
          </a>

          <a
            href="#pricing"
            className="rounded-full border border-slate-600 px-7 py-4 font-bold"
          >
            View Packages
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2 className="mb-12 text-center text-4xl font-bold">
          Website Packages
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-slate-900 p-8">
            <h3 className="text-3xl font-bold">Starter</h3>

            <p className="mt-3 text-slate-300">
              Perfect for new businesses.
            </p>

            <p className="mt-6 text-5xl font-black">
              $499
            </p>
          </div>

          <div className="rounded-3xl border-2 border-cyan-400 bg-slate-900 p-8">
            <h3 className="text-3xl font-bold text-cyan-300">
              Business
            </h3>

            <p className="mt-3 text-slate-300">
              Our most popular website.
            </p>

            <p className="mt-6 text-5xl font-black">
              $999
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8">
            <h3 className="text-3xl font-bold">
              Enterprise
            </h3>

            <p className="mt-3 text-slate-300">
              Fully customized solution.
            </p>

            <p className="mt-6 text-5xl font-black">
              Custom
            </p>
          </div>

        </div>
      </section>

      {/* AI Employee */}
      <section
        id="ai"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2 className="text-4xl font-bold">
          AI Employee
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          Every website can include an AI employee that answers customer
          questions, books appointments, qualifies leads, and works 24 hours a
          day without taking breaks.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <h2 className="text-4xl font-bold">
          Contact Us
        </h2>

        <p className="mt-6 text-slate-300">
          Phone: 470-371-1587
        </p>

        <p className="text-slate-300">
          Email: info@coresiteagency.com
        </p>
      </section>

      {/* Floating AI Chat */}
      <AIChat />
    </main>
  );
}