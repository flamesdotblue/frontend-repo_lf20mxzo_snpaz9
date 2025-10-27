import { Rocket, Shield, TrendingUp } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 grid place-items-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg">FlowInvest</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-600">
          <a href="#invest" className="hover:text-zinc-900 transition-colors">Investors</a>
          <a href="#firms" className="hover:text-zinc-900 transition-colors">Firms</a>
          <a href="#how" className="hover:text-zinc-900 transition-colors">How it works</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3.5 py-2 text-sm font-medium hover:bg-zinc-50 transition-colors">
            <Shield className="h-4 w-4 text-indigo-600" />
            Sign in
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors">
            <TrendingUp className="h-4 w-4" />
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
