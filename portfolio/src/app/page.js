import PortfolioApp from "@/components/App/PortfolioApp";
import Navbar from "@/components/Shared/Navbar";
import TargetCursor from "@/components/Cursor/TargetCursor";
import Preloader from "@/components/Loader/Preloader";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen font-[family-name:var(--font-geist-sans)] cursor-none">
      <Preloader />
      <TargetCursor />
      <Navbar />
      <PortfolioApp />
    </main>
  );
}
