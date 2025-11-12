import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import InteractiveHoverButton from "@/components/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-neutral-950 relative">

      {/* Glow BG */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-neutral-300 mt-3">
            Facing laptop issues? Book your repair now!
          </p>
        </div>

        {/* MAP */}
        <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-xl h-[350px] sm:h-[400px] mb-16">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shop Location"
          ></iframe>
        </div>

        {/* CONTACT DETAILS */}
        {/* CONTACT DETAILS */}
<div className="flex flex-wrap gap-10 text-white mt-10 justify-start sm:justify-center">

  {[
    { icon: Phone, label: "Phone", value: "+1 (234) 567-890", color: "text-blue-400" },
    { icon: MessageCircle, label: "WhatsApp", value: "Message Us Instantly", color: "text-green-400" },
    { icon: Mail, label: "Email", value: "support@laptoprepair.com", color: "text-yellow-400" },
    { icon: MapPin, label: "Address", value: "123 Tech Street, Downtown", color: "text-red-400" },
    { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9 AM – 8 PM", color: "text-purple-400" },
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-3 min-w-[200px] max-w-[260px] text-left"
    >
      <item.icon className={`w-6 h-6 ${item.color}`} />
      <div>
        <p className="text-sm text-neutral-400">{item.label}</p>
        <p className="text-lg font-semibold">{item.value}</p>
      </div>
    </div>
  ))}

</div>


        {/* ✅ BUTTONS — FLEX-COL ON MOBILE, ROW ON LARGE SCREENS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 w-full items-center">
          <InteractiveHoverButton text="Contact" />
          <InteractiveHoverButton text="WhatsApp" />
        </div>

      </div>
    </section>
  );
}
