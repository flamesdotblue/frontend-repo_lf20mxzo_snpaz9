import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlansGrid from "./components/PlansGrid";
import HowItWorks from "./components/HowItWorks";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <PlansGrid />
        <HowItWorks />
      </main>
      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} FlowInvest. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-zinc-900">Privacy</a>
            <a href="#" className="hover:text-zinc-900">Terms</a>
            <a href="#" className="hover:text-zinc-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
