import { LayoutDashboard } from "lucide-react";

export default function Head() {
  return (
    <section className="py-6 px-6 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Logo/Title */}
        <h2 className="text-2xl font-bold flex items-center gap-2">
           <LayoutDashboard color="#00816e" className="w-6 h-6" />
          <span className="text-black">Business</span>
          <span className="text-[color:var(--primary-600)]">Cafe</span>
        </h2>

        {/* Right: Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-[oklch(28%_0.09_180)] font-medium text-lg">
          <a href="#" className="text-[color:var(--primary-600)] hover:underline">Home</a>
          <a href="#" className="text-black hover:underline">Space</a>
          <a href="#" className="text-black hover:underline">About</a>
          <a href="#" className="text-black hover:underline">Contact</a>
        </nav>
      </div>
    </section>
  );
}
