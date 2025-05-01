import React, { useState } from 'react';
import './FAQ.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: "01.",
      question: "Why should I choose Humesitic?",
      answer: "Businesses most my capacity is full, not incentivisation we need to start advertising as social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, and note any difference in the kitchen? If you're not hurting you're not winning loop back."
    },
    {
      id: "02.",
      question: "I like your works, how do we start a project?",
      answer: "To start a project, simply contact us through our contact form or email. We'll schedule a consultation to discuss your needs and provide a proposal."
    },
    {
      id: "03.",
      question: "What info is required to get a quotation?",
      answer: "We typically need information about your project scope, timeline, budget, and any specific requirements you might have to provide an accurate quotation."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section container">
      <div className="faq-header">
        <div className="header-content">
          <span className="faq-label">Frequently asked<br/>questions</span>
          <h2 className="faq-title">Constant collaboration is how we roll. Let's see if we are a good fit.</h2>
        </div>
      </div>
      
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-content">
                <span className="faq-number">{ faq.id }</span>
                {faq.question}
              </div>
              <span className="faq-toggle">
                {activeIndex === index ? (
                  <span className="custom-minus"></span>
                ) : (
                  <span className="custom-plus"></span>
                )}
              </span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;