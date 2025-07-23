export default function About() {
  return (
    <section className="py-12 px-6 text-center">
      <div className="flex flex-col md:flex-row items-start justify-center text-left md:text-justify mb-8 gap-6">
        {/* Left side */}
        <div className="md:w-1/2 pr-6 md:border-r md:border-gray-300">
          <h2 className="text-[color:var(--primary-600)]">About Us</h2>

          <p className="text-black font-bold">
            We offer creative working environments<br /> that suit your business.
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 pl-6">
         <p className="text-black">
  Our workspace is designed to inspire productivity, creativity, and collaboration. Whether you're working solo or building something big, we provide the environment to help your business grow.
</p>

          <a
            href="#"
            className="text-[color:var(--primary-600)] hover:underline"
          >
            More About Us
          </a>
        </div>
      </div>
    </section>
  );
}
