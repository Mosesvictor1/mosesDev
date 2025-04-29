import Marquee from "react-fast-marquee"; // ← Import the library

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Loveth Johnson",
      role: "Project Manager at Tech Innovators",
      avatar: "assets/tesmonial1.avif",
      quote: "\"Moses' expertise in design and development completely transformed our project. His attention to detail and creativity brought our vision to life seamlessly.\""
    },
    {
      id: 2,
      name: "Joy Smith",
      role: "Sales Executive at Global Enterprises",
      avatar: "assets/tesmonial2.avif",
      quote: "\"Working with Moses was a game changer for our project. He helped create a user experience that’s intuitive and visually stunning. I couldn’t recommend him more!\""
    },
    {
      id: 3,
      name: "Evelyn Miller",
      role: "Operations Manager at Tech Solutions",
      avatar: "assets/tesmonial3.avif",
      quote: "\"Moses' work ethic and technical expertise in UI/UX design is top-tier. He helped us create an app that's both functional and engaging. Highly recommended!\""
    },
    {
      id: 4,
      name: "John Smith",
      role: "Business Solutions Group",
      avatar: "assets/tesmonial4.avif",
      quote: "\"As a business owner, working with Moses was an absolute pleasure. He crafted a solution that streamlined our operations and boosted our productivity. Outstanding work!\""
    },
    {
      id: 5,
      name: "Jane Doe",
      role: "Marketing Director at Creative Solutions",
      avatar: "assets/tesmonial5.avif",
      quote: "\"Moses took our brand's visual identity to the next level. His designs not only impressed but also elevated the user experience in ways I hadn't imagined before!\""
    },
    {
      id: 6,
      name: "Sophia Lee",
      role: "HR Director at People First Corp",
      avatar: "https://images.unsplash.com/photo-1615453261246-4b32e335a4a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMExhZHl8ZW58MHx8MHx8fDA%3D",
      quote: "\"Moses helped us create an interface that's as efficient as it is beautiful. The user flow is smooth, and the design is intuitive. He’s a true professional in his field.\""
    }
  ];

  return (
    <div className="bg-purple-950 bg-gradient-to-br from-purple-950 to-indigo-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="testimonials">
      {/* Background effect with light effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }}></div>
      </div>

      {/* Content */}
      <div className="max-w-full mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="bg-purple-800 bg-opacity-70 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4.5 6.5C4.5 5.12 5.62 4 7 4C8.38 4 9.5 5.12 9.5 6.5V9.5C9.5 10.88 8.38 12 7 12C5.62 12 4.5 10.88 4.5 9.5V6.5Z" fill="white"/>
              <path d="M14.5 6.5C14.5 5.12 15.62 4 17 4C18.38 4 19.5 5.12 19.5 6.5V9.5C19.5 10.88 18.38 12 17 12C15.62 12 14.5 10.88 14.5 9.5V6.5Z" fill="white"/>
              <path d="M7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
              <path d="M12 17V20" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
            </svg>
            <span className="text-sm font-medium">Testimonials</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            What My<br />Clients are Saying
          </h2>

          <p className="text-purple-200 text-lg max-w-2xl">
            Hear from satisfied Clients that have worked with me
          </p>
        </div>

        {/* Testimonial Rows */}
        <div className="space-y-8">
          {/* Row 1 - Scroll Left */}
          <Marquee gradient={false} speed={40} pauseOnHover={true}>
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-purple-900 bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border border-purple-800 hover:border-purple-600 transition-all mx-4 w-96 flex-shrink-0 relative overflow-hidden"
                style={{
                  boxShadow: "inset 10px 10px 30px rgba(139, 92, 246, 0.6), inset -10px -10px 30px rgba(67, 40, 145, 0.5)"
                }}
              >
                <div className="flex items-center mb-4 z-10">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-white">{testimonial.name}</h3>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-purple-100 leading-relaxed z-10">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </Marquee>

          {/* Row 2 - Scroll Right (reverse) */}
          <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true}>
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-purple-900 bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border border-purple-800 hover:border-purple-600 transition-all mx-4 w-96 flex-shrink-0 relative overflow-hidden"
                style={{
                  boxShadow: "inset 10px 10px 30px rgba(139, 92, 246, 0.6), inset -10px -10px 30px rgba(67, 40, 145, 0.5)"
                }}
              >
                <div className="flex items-center mb-4 z-10">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-white">{testimonial.name}</h3>
                    <p className="text-purple-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-purple-100 leading-relaxed z-10">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
