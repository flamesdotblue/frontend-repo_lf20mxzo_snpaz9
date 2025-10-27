import { Building2, ArrowRight, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium mb-4">
              Smarter wealth growth for everyone
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              Invest with confidence. Firms you trust. Returns you love.
            </h1>
            <p className="mt-4 text-zinc-600 text-lg">
              A modern portal connecting everyday investors with vetted investment firms. Diversify, track, and grow your money transparently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#invest" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition-colors">
                Start investing
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#firms" className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-zinc-900 font-medium hover:bg-zinc-50 transition-colors">
                <Building2 className="h-4 w-4" />
                Register your firm
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-indigo-600" />
                25k+ investors
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-indigo-600" />
                120+ partner firms
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Conservative", apr: "6-8%", risk: "Low risk" },
                  { title: "Income", apr: "8-11%", risk: "Low to mid" },
                  { title: "Balanced", apr: "11-14%", risk: "Moderate" },
                  { title: "Growth", apr: "14-18%", risk: "Higher" },
                ].map((p) => (
                  <div key={p.title} className="rounded-xl border border-zinc-200 p-4">
                    <div className="text-xs text-zinc-500">Portfolio</div>
                    <div className="mt-1 font-medium">{p.title}</div>
                    <div className="mt-3 text-2xl font-semibold text-zinc-900">{p.apr}</div>
                    <div className="text-xs text-zinc-500">expected APR</div>
                    <div className="mt-3 inline-flex rounded bg-emerald-50 text-emerald-700 px-2 py-1 text-xs font-medium">
                      {p.risk}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-4 text-white">
                <div className="text-sm/5 text-white/80">Example projection</div>
                <div className="mt-1 text-2xl font-semibold">$10,000 → $11,400</div>
                <div className="text-white/80">12 months in a Balanced plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
