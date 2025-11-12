import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "Their laptop repair service was incredibly fast. My device had a motherboard issue, and they fixed it within a day. The pricing was also very reasonable.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Priya Sharma",
    role: "Software Engineer",
  },
  {
    text: "I got my MacBook battery replaced here. The team explained everything clearly and used genuine parts. My device now works like new!",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Suresh Kumar",
    role: "Graphic Designer",
  },
  {
    text: "Amazing customer service! They recovered all my important data from a completely dead laptop. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Aisha Patel",
    role: "Business Owner",
  },
  {
    text: "Their technicians quickly diagnosed the overheating issue in my gaming laptop and cleaned the fans thoroughly. Performance has greatly improved.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Rohit Verma",
    role: "Gamer",
  },
  {
    text: "Best laptop service center in the area. They upgraded my RAM and SSD, and the speed difference is unbelievable.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Neha Singh",
    role: "Digital Marketer",
  },
  {
    text: "Professional and reliable service. They replaced my broken laptop screen within a few hours. Very satisfied with the work.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Ritika Mehta",
    role: "College Student",
  },
  {
    text: "I appreciate their transparency. They informed me about the exact issue, cost, and time. My laptop now works perfectly.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Amit Joshi",
    role: "Accountant",
  },
  {
    text: "Great experience! They helped me install licensed software and optimized the performance of my old laptop.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Kavya Nair",
    role: "Teacher",
  },
  {
    text: "Quick and trustworthy service. My laptop's charging port was loose, and they repaired it the same day. Definitely recommended!",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Aditya Khanna",
    role: "Student",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-neutral-950 py-10 relative text-white"  >
       <div className="absolute inset-0">
        <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-600/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/20 blur-[160px] rounded-full"></div>
      </div>
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-white">Testimonials</div>
          </div>

          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>

          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
