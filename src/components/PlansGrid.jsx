import { TrendingUp, Shield, CheckCircle } from "lucide-react";

const plans = [
  {
    name: "Conservative",
    apr: "6–8% APR",
    min: "$100 min",
    desc: "Capital preservation with steady income through bonds and money markets.",
    badge: "Low risk",
  },
  {
    name: "Balanced",
    apr: "10–12% APR",
    min: "$250 min",
    desc: "Blend of equities and fixed income for a smooth growth trajectory.",
    badge: "Moderate risk",
  },
  {
    name: "Growth",
    apr: "14–18% APR",
    min: "$500 min",
    desc: "Aggressive equity and alternative strategies for higher potential returns.",
    badge: "Higher risk",
  },
];

export default function PlansGrid() {
  return (
    <section id="invest" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
          Choose a plan that fits your goals
        </h2>
        <p className="mt-3 text-zinc-600">
          Start small or go big — every plan is managed by vetted firms with robust risk controls.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <div key={p.name} className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-zinc-900">{p.name}</div>
              <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-1">{p.badge}</span>
            </div>
            <div className="mt-2 text-2xl font-semibold text-zinc-900">{p.apr}</div>
            <div className="text-xs text-zinc-500">{p.min}</div>
            <p className="mt-4 text-sm text-zinc-600">{p.desc}</p>
            <div className="mt-5 flex items-center gap-3 text-sm text-zinc-600">
              <div className="flex items-center gap-1"><Shield className="h-4 w-4 text-indigo-600"/> Regulated firms</div>
              <div className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-indigo-600"/> Transparent fees</div>
            </div>
            <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-white font-medium hover:bg-indigo-700 transition-colors">
              Invest now
              <TrendingUp className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
