const services = [
  {
    title: "Renting Offices",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdKiaHz6nf0XhZoUpKFlC2M72Pz5Bzqou51g&s",
    description:
      "Renting an office involves short-term agreements, offering flexibility for businesses needing temporary workspaces or avoiding long-term commitments.",
  },
  {
    title: "Coffee Shop",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkIYFv9CsYSiNbVRWAOYBcpltapTxSiAsEIA&s",
    description:
      "A coffee shop is a place where people can buy and enjoy coffee, often accompanied by light food like pastries.",
  },
  {
    title: "Private Event Space",
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBAWtaY1SX8hVCWtXC8li3X65p4LWEgJs1DA&s",
    description:
      "A private event space offers an exclusive and personalized setting for gatherings,these spaces provide privacy, customizable decor and dedicated staff to ensure a seamless experience. ",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        We Offer creative working<br /> environments
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Find your perfect workspace. Choose from versatile options<br /> tailored to your needs.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={s.Image}
              alt={s.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-[color:var(--primary-600)] text-xl font-bold mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{s.description}</p>
              <button className="text-[color:var(--primary-600)] font-bold">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
