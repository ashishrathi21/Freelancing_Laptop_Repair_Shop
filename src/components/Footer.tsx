import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">


        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800" />

        {/* Bottom Text */}
        <p className="text-sm text-center">
          © {year} M-Tech Laptop Services. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
