import React, { useState } from "react";
import scss from "./testimonials.module.scss";

const testimonials = [
  {
    text: "2m7Project przekształcił moje mieszkanie w stylową i funkcjonalną przestrzeń, która idealnie odzwierciedla moją osobowość.",
    name: "Anna Kowalska",
    role: "Klient prywatny",
    image: "/image1.png"
  },
  {
    text: "Karol i jego zespół osiągnęli znakomite wyniki. Uważnie wsłuchali się w nasze potrzeby i stworzyli piękny, funkcjonalny dom.",
    name: "Ewa Jankowska",
    role: "Właściciel domu",
    image: "/image2.png"
  },
  {
    text: "Współpraca z 2m7Project była przełomem dla naszego biura. Stworzyli tętniące życiem i produktywne miejsce pracy.",
    name: "Piotr Nowak",
    role: "Kierownik Biura",
    image: "/image3.png"
  },
  
];

const ScrollableTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={scss.testimonialSection}>
      <h2 className={scss.title}>Co mówią o nas nasi klienci</h2>
      <div className={scss.scrollContainer}>
        <div
          className={scss.testimonialGrid}
          style={{ transform: `translateX(-${currentIndex * 30}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className={scss.testimonialItem}>
              <p>{testimonial.text}</p>
              <div className={scss.testimonialAuthor}>
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={scss.sliderButtons}>
        <button className={scss.sliderButton} onClick={prevSlide}>&lt;</button>
        <button className={scss.sliderButton} onClick={nextSlide}>&gt;</button>
      </div>
      
    </section>
  );
};

export default ScrollableTestimonials;
