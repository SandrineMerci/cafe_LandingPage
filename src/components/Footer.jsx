import { Facebook, Twitter, Instagram, Linkedin} from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-[var(--primary-color-500)]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-left text-sm">
        {/* Left: Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-lg font-bold text-[var(--primary-color-600)]">Business Cafe</h2>
          </div>
          <p className="mb-4">
            Discover your ideal workspace with us.<br /> Work smart, not hard in our <br /> fully-equipped office spaces.
          </p>
          <div className="flex gap-4 mt-4 text-[var(--primary-color-600)] text-xl">
            <Facebook color="#639905" />
            <Twitter color="#639905" />
            <Linkedin color="#639905" />
            <Instagram color="#639905" />
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="font-semibold mb-2 border-b border-gray-400 w-fit">Quick Links</h3>
          <ul className="space-y-1 mt-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Space</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="font-semibold mb-2 border-b border-gray-400 w-fit">Contact Info</h3>
          <p className="mt-2"><strong>Location:</strong> Kigali, <span className="text-[var(--primary-color-600)]">Rwanda</span></p>
          <p><strong>Email:</strong> businesscafe@info.com</p>
          <p><strong>Phone:</strong> +250783787817</p>
         <a href="https://www.google.com/maps" className="text-[oklch(53%_0.14_180)] underline">
  View Location on GoogleMap
</a>

        </div>
      </div>

      <div className="text-center py-4 border-t border-[var(--primary-color-500)] text-xs text-black">
        &copy; 2023 Business Coffee. All rights reserved.
      </div>
    </footer>
  );
}
