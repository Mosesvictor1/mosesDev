import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaSkype } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    budget: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your submit logic here
  };

  return (
    <section className="relative bg-gradient-to-br from-purple-950 via-indigo-950 to-black text-white py-20 px-6 sm:px-10 overflow-hidden">
      {/* Floating Lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse-fast"></div>
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Info Section */}
        <div className="space-y-8">
          <div className="text-purple-300 text-sm uppercase tracking-widest">
            — Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Talk for{" "}
            <span className="text-purple-400">Your Next Projects</span>
          </h2>
          <p className="text-purple-200 max-w-md">
            Let's create something amazing together! Feel free to reach out and
            let's collaborate.
          </p>

          <div className="space-y-6">
            {/* Contact Info Items */}
            {[
              { Icon: FiPhone, text: "+234 9138691147" },
              { Icon: FiMail, text: "victormoses@gmail.com" },
              { Icon: FaSkype, text: "example" },
              { Icon: FiMapPin, text: "Lagos MainLand Nigeria" },
            ].map(({ Icon, text }, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="bg-purple-900/40 p-4 rounded-full backdrop-blur-md border border-purple-700 shadow-inner shadow-purple-600/40 shadow-[inset_0_2px_8px_rgba(139,92,246,0.7)]">
                  <Icon className="text-purple-400 text-xl" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Section */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Inputs */}
          {[
            { name: "name", placeholder: "Your Name *" },
            { name: "email", placeholder: "Email *" },
            { name: "phone", placeholder: "Phone *" },
            { name: "interest", placeholder: "I'm Interested In *" },
            { name: "budget", placeholder: "Budget Range (USD) *" },
            { name: "country", placeholder: "Country *" },
          ].map(({ name, placeholder }, idx) => (
            <input
              key={idx}
              name={name}
              type="text"
              required
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="bg-purple-900/40 backdrop-blur-md rounded-lg p-4 text-white placeholder-purple-300 border border-purple-700 focus:border-purple-400 outline-none shadow-inner shadow-purple-600/50 shadow-[inset_0_4px_12px_rgba(139,92,246,0.8)]"
            />
          ))}

          {/* Textarea */}
          <textarea
            name="message"
            required
            placeholder="Your Message *"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="md:col-span-2 bg-purple-900/40 backdrop-blur-md rounded-lg p-4 text-white placeholder-purple-300 border border-purple-700 focus:border-purple-400 outline-none shadow-inner shadow-purple-600/50 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 font-bold w-[60%] md:w-[30%]  backdrop-blur-md rounded-lg p-4 text-white placeholder-purple-300 border border-purple-700 focus:border-purple-400 outline-none bg-purple-900/40  shadow-purple-600/50 shadow-[inset_0_4px_10px_rgba(139,92,246,0.8)]"
          >
            Submit
            <span className="text-xl ml-2">➔</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
