import { Search, Wallet, Building2, Handshake } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-900">For Investors</h3>
          <p className="mt-2 text-zinc-600">Create your profile, explore portfolios, and start investing in minutes.</p>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-3">
              <span className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center text-sm font-semibold">1</span>
              <div>
                <div className="font-medium flex items-center gap-2"><Search className="h-4 w-4 text-indigo-600"/> Discover portfolios</div>
                <p className="text-sm text-zinc-600">Compare strategies, historical performance, and risk levels.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center text-sm font-semibold">2</span>
              <div>
                <div className="font-medium flex items-center gap-2"><Wallet className="h-4 w-4 text-indigo-600"/> Fund your account</div>
                <p className="text-sm text-zinc-600">Securely deposit funds and allocate across chosen plans.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-8 w-8 rounded-full bg-indigo-600 text-white grid place-items-center text-sm font-semibold">3</span>
              <div>
                <div className="font-medium flex items-center gap-2"><Handshake className="h-4 w-4 text-indigo-600"/> Track and grow</div>
                <p className="text-sm text-zinc-600">Monitor performance with transparent reporting and insights.</p>
              </div>
            </li>
          </ol>
        </div>

        <div id="firms">
          <h3 className="text-2xl font-semibold text-zinc-900">For Investment Firms</h3>
          <p className="mt-2 text-zinc-600">Onboard, verify compliance, and access a growing pool of capital.</p>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-3">
              <span className="h-8 w-8 rounded-full bg-fuchsia-600 text-white grid place-items-center text-sm font-semibold">1</span>
              <div>
                <div className="font-medium flex items-center gap-2"><Building2 className="h-4 w-4 text-fuchsia-600"/> Apply and verify</div>
                <p className="text-sm text-zinc-600">Submit credentials, strategy documents, and compliance paperwork.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-8 w-8 rounded-full bg-fuchsia-600 text-white grid place-items-center text-sm font-semibold">2</span>
              <div>
                <div className="font-medium flex items-center gap-2"><Handshake className="h-4 w-4 text-fuchsia-600"/> List your portfolios</div>
                <p className="text-sm text-zinc-600">Create offerings with fees, risk profiles, and expected returns.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="h-8 w-8 rounded-full bg-fuchsia-600 text-white grid place-items-center text-sm font-semibold">3</span>
              <div>
                <div className="font-medium flex items-center gap-2"><Wallet className="h-4 w-4 text-fuchsia-600"/> Receive allocations</div>
                <p className="text-sm text-zinc-600">Manage investor capital with transparent reporting and payouts.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
