import React, { useState } from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: "01",
      quote: "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers.",
      author: "Michael Kaizer",
      role: "CEO of Basecamp Corp",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "02",
      quote: "Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition in our market segment.",
      author: "Sarah Johnson",
      role: "Marketing Director at TechCorp",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "03",
      quote: "We've seen a 40% increase in engagement since implementing their strategies. Truly remarkable results!",
      author: "David Wilson",
      role: "Founder of Startup Inc",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      id: "04",
      quote: "The team delivered exceptional results beyond our expectations. Their attention to detail is impressive.",
      author: "Emily Chen",
      role: "Product Manager at InnovateCo",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: "05",
      quote: "Working with them has been a game-changer for our business. Their strategic approach is unmatched.",
      author: "Robert Taylor",
      role: "CTO of Digital Solutions",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonial container">
      <div className="testimonial-content">
        <blockquote>
          "{testimonials[currentIndex].quote}"
        </blockquote>
        
        <div className="testimonial-footer">
          <div className="author-info">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].author}
              className="author-image"
            />
            <div className="author-details">
              <strong>{testimonials[currentIndex].author}</strong>
              <span>{testimonials[currentIndex].role}</span>
            </div>
          </div>
          
          <div className="testimonial-controls">
            <div className="navigation-arrows">
              <button onClick={prevTestimonial} className="arrow-btn">
              🡠
              </button>
              <div className="testimonial-counter">
                {testimonials[currentIndex].id}<span className='count-color'>/0{testimonials.length}</span>
              </div>
              <button onClick={nextTestimonial} className="arrow-btn">
              🡢
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;