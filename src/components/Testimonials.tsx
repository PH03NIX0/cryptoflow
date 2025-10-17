import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const testimonials = [
  {
    rating: 5,
    quote: "As a beginner, I was intimidated by crypto trading until I found CryptoFlow. Their intuitive interface and educational resources made it easy to start investing confidently.",
    name: "Sarah Johnson",
    role: "Tech Entrepreneur",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    rating: 5,
    quote: "The real-time analytics and low fees make CryptoFlow my go-to platform. I've been trading for years and this is by far the best experience I've had.",
    name: "Michael Chen",
    role: "Day Trader",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    rating: 5,
    quote: "Security was my main concern when choosing a crypto platform. CryptoFlow's robust security features and transparent policies gave me the confidence to invest.",
    name: "Emily Rodriguez",
    role: "Finance Professional",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
  {
    rating: 5,
    quote: "Their customer support is phenomenal. Any time I've had a question or issue, the team has resolved it quickly. The platform itself is lightning fast and reliable.",
    name: "Emma Thompson",
    role: "Investment Advisor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    let interval: NodeJS.Timeout;

    const resetInterval = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        api.scrollNext();
      }, 5000);
    };

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      resetInterval();
    });

    // Initial auto-play
    resetInterval();

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#0E0B1F' }}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#A78BFA' }}>
            What Our Users Say
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto px-4" style={{ color: '#9CA3AF' }}>
            Join thousands of satisfied traders who have transformed their trading experience with CryptoFlow.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto space-y-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card
                    className="shadow-lg min-h-[280px]"
                    style={{
                      backgroundColor: '#1E1B2E',
                      borderColor: '#393d4b',
                      borderWidth: '1px',
                    }}
                  >
                    <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400"
                            style={{ color: '#FBBF24' }}
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-base sm:text-lg text-white leading-relaxed flex-1">
                        "{testimonial.quote}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-sm" style={{ color: '#9CA3AF' }}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="transition-all rounded-full"
                style={{
                  width: current === index ? '32px' : '8px',
                  height: '8px',
                  backgroundColor: current === index ? '#9989eb' : '#393d4b',
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
