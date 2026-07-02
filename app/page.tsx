import AIChat from "./AIChat";

const industries = [
  {
    title: "Restaurants",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    desc: "Menus, reservations, hours, location, and customer contact forms.",
  },
  {
    title: "Barbers & Salons",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=80",
    desc: "Service pages, booking links, galleries, and mobile-friendly layouts.",
  },
  {
    title: "Gyms & Fitness",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    desc: "Class schedules, trainers, plans, memberships, and lead capture.",
  },
  {
    title: "Local Services",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    desc: "Lead capture, reviews, service pages, and conversion-focused layouts.",
  },
];

const plans = [
  {
    name: "Starter Website",
    price: "$1,000",
    desc: "Great for getting your business online.",
    button: "Get Started",
    features: [
      "Professional website design",
      "Mobile responsive",
      "Contact form",
      "Google Maps",
      "Basic SEO setup",
      "Fast & secure hosting",
    ],
  },
  {
    name: "E-Commerce Website",
    price: "$2,500+",
    desc: "Everything you need to sell online.",
    button: "Get Started",
    features: [
      "Everything in Starter",
      "Online store",
      "Product management",
      "Secure checkout",
      "Payment integration",
      "Inventory support",
    ],
  },
  {
    name: "AI Employee Add-On",
    price: "+$1,000",
    desc: "Power your website with 24/7 AI.",
    button: "Add AI Employee",
    popular: true,
    features: [
      "24/7 customer support",
      "Lead capture & qualification",
      "Service recommendations",
      "Appointment booking",
      "FAQ automation",
      "Google Sheets integration",
    ],
  },
  {
    name: "Website Care Plan",
    price: "$99",
    desc: "Ongoing support & maintenance.",
    button: "Learn More",
    monthly: "/month",
    features: [
      "Website updates",
      "AI maintenance",
      "Security monitoring",
      "Bug fixes",
      "Priority support",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b18] text-white">
      {/* NAV */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 font-black text-slate-950">
            CS
          </div>
          <div>
            <h1 className="text-xl font-bold">Core Site Agency LLC</h1>
            <p className="text-sm text-slate-400">CoreSiteLLC.com</p>
          </div>
        </div>

        <div className="hidden gap-8 text-sm font-semibold text-slate-300 md:flex">
          <a href="#work">Work</a>
          <a href="#plans">Plans</a>
          <a href="#ai">AI Add-On</a>
          <a href="#quote">Quote</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="tel:4703711587"
          className="rounded-full bg-white px-8 py-4 font-black text-slate-950"
        >
          Call 470-371-1587
        </a>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-bold uppercase tracking-wide text-cyan-200">
            ✦ Modern websites for small businesses
          </p>

          <h2 className="text-6xl font-black leading-none md:text-7xl">
            Websites that work while you{" "}
            <span className="text-cyan-300">sleep.</span>
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-300">
            Core Site Agency LLC builds sleek websites, online stores, and
            AI-powered customer service systems that help small businesses
            answer questions, capture leads, and convert visitors 24/7.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="rounded-full bg-cyan-300 px-8 py-4 font-black text-slate-950"
            >
              Get a Free Quote →
            </a>
            <a
              href="#plans"
              className="rounded-full border border-white/20 px-8 py-4 font-black text-white"
            >
              See Packages
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-cyan-300/20 bg-slate-800/60 p-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
              alt="Business dashboard"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 -left-6 max-w-sm rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-300 px-4 py-3 font-black text-slate-950">
                AI
              </div>
              <h3 className="text-2xl font-black">Your 24/7 AI Employee</h3>
            </div>
            <p className="text-slate-300">
              Answers customer questions, recommends services, and captures
              leads even when your business is closed.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <h2 className="text-5xl font-black leading-tight">
            Built for everyday businesses.
          </h2>
          <p className="text-xl leading-8 text-slate-300">
            Simple, clean, premium-looking websites for restaurants, barbers,
            salons, contractors, gyms, stores, and local service businesses.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-4 text-slate-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ai" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 rounded-[2rem] border border-cyan-300/20 bg-slate-900/70 p-8 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80"
            alt="AI assistant"
            className="h-full min-h-[420px] rounded-[1.5rem] object-cover"
          />

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
              Meet Your New Employee
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight">
              Never takes a vacation.
              <br />
              Never misses a lead.
              <br />
              Never <span className="text-cyan-300">sleeps.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Your AI Employee works 24/7 answering questions, qualifying
              leads, recommending services, and helping customers take action
              while you focus on running your business.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Answers questions instantly",
                "Captures qualified leads",
                "Recommends your services",
                "Helps book appointments",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-800 p-4 text-slate-200"
                >
                  ✓ {item}
                </div>
              ))}
            </div>

            <a
              href="#quote"
              className="mt-8 w-fit rounded-full bg-cyan-300 px-8 py-4 font-black text-slate-950"
            >
              See the AI in Action →
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="plans" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
            Simple, Transparent Pricing
          </p>
          <h2 className="mt-4 text-5xl font-black">
            Choose the perfect package.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-7 ${
                plan.popular
                  ? "border-cyan-300 bg-slate-900"
                  : "border-white/10 bg-slate-900/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-300 px-6 py-2 text-xs font-black text-slate-950">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-xl font-black">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{plan.desc}</p>

              <p className="mt-6 text-4xl font-black text-cyan-300">
                {plan.price}
                {plan.monthly && (
                  <span className="text-base text-white">{plan.monthly}</span>
                )}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="#quote"
                className="mt-8 block rounded-full bg-cyan-300 px-6 py-3 text-center font-black text-slate-950"
              >
                {plan.button}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-center md:grid-cols-4">
          <div>
            <p className="text-3xl font-black text-cyan-300">50+</p>
            <p className="text-slate-300">Businesses Helped</p>
          </div>
          <div>
            <p className="text-3xl font-black text-cyan-300">250+</p>
            <p className="text-slate-300">Websites Built</p>
          </div>
          <div>
            <p className="text-3xl font-black text-cyan-300">24/7</p>
            <p className="text-slate-300">AI Always Working</p>
          </div>
          <div>
            <p className="text-3xl font-black text-cyan-300">100%</p>
            <p className="text-slate-300">Satisfaction Focused</p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10">
          <h2 className="text-5xl font-black">Ready to grow your business?</h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-300">
            Let’s build a website that works while you focus on what you do
            best. Click the AI button in the bottom-right to get started.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:4703711587"
              className="rounded-full bg-cyan-300 px-8 py-4 font-black text-slate-950"
            >
              Call 470-371-1587
            </a>
            <a
              href="#ai"
              className="rounded-full border border-white/20 px-8 py-4 font-black text-white"
            >
              Learn About AI
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p className="font-bold">Core Site Agency LLC</p>
          <p className="text-slate-400">Phone: 470-371-1587</p>
          <p className="text-slate-400">Email: coresitellc@gmail.com</p>
        </div>
      </footer>

      <AIChat />
    </main>
  );
}