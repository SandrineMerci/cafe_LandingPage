export default function Head() {
  return (
<section className="py-6 px-6 bg-[oklch(93.5% 0.02 180)]">
  <div className="flex items-center justify-between">
    {/* Left: Logo/Title */}
    <h2 className="text-2xl font-bold">
      <span className="text-black">Business </span>
      <span className="text-[color:var(--primary-600)]">Cafe</span>
    </h2>

    {/* Right: Navigation */}
    <nav className="flex gap-6 text-[oklch(28%_0.09_180)] font-medium text-lg">
     <a href="#" className="text-[color:var(--primary-600)] hover:underline">Home</a>
      <a href="#" className="text-black hover:underline">Space</a>
      <a href="#" className="text-black hover:underline">About</a>
      <a href="#" className="text-black hover:underline">Contact</a>
    </nav>
  </div>
</section>


  );
}