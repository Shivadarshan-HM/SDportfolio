import PortfolioApp from "@/components/App/PortfolioApp";
import Navbar from "@/components/Shared/Navbar";
import CustomCursor from "@/components/Cursor/CustomCursor";
import Preloader from "@/components/Loader/Preloader";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen font-[family-name:var(--font-geist-sans)] cursor-none">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <PortfolioApp />
    </main>
  );
}
