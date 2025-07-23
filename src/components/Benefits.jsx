import { Earth } from "lucide-react";

const benefits = [
  {
    title: "Creative Space",
    description: "A dedicated environment designed to foster innovative thinking and idea generation"
  },
  {
    title: "High Speed Wifi",
    description: "Wi-Fi networks that offer significantly faster data transfer rates than traditional Wi-Fi."
  },
 
  {
    title: "Pending Area",
    description: "A quiet and comfortable space for visitors to wait or relax before meetings or appointments."
  },
  {
    title: "24/7 Access",
    description: "Enjoy round-the-clock access to our facilities so you can work whenever inspiration strikes."
  },
  {
    title: "Great Location",
    description: "Located in the heart of Kigali, easily accessible by public transport and close to major services."
  },
  {
    title: "Outdoor Space",
    description: "Breathe fresh air and refresh your mind in our open, green outdoor seating and relaxation zones."
  }

];

export default function Benefits() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="text-center mb-8">
        <p className="text-[color:var(--primary-600)] font-semibold">Your Benefits</p>
        <h1 className="text-3xl font-bold mt-2">Why Choose Us</h1>
      </div>
      
      <p className="text-center mb-12">
        Unleash your productivity wins or premium workspace solutions,<br /> it breaks your entire game and join the winning team today.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">

        
        <div className="space-y-6">
          {benefits.slice(0, 3).map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-[oklch(67%_0.14_180)]">
              <Earth color="#0f0f0f" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-white">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Middle Column - Photo Space */}
        <div className="flex items-center justify-center">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3hGwgqJlPzU9uR8tFUSH8zr7UQ6yjTpnMMw&s" 
              alt="Workspace illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        
        <div className="space-y-6">
          {benefits.slice(3).map((item, index) => (
           
              <div key={index+3} className="p-4 rounded-lg bg-[oklch(67%_0.14_180)]">
               
          <Earth color="#0f0f0f" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}