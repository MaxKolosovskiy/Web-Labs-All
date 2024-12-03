import React from 'react';
import '../styles/FAQ.css';
import FAQItem from './FAQItem';

const FAQ = () => {
  const faqData = [
    {
      question: 'What types of vehicles are available?',
      answer: 'We provide a diverse selection of vehicles, including sedans, SUVs, sports models, and electric cars. Browse our full catalog to discover more options.',
    },
    {
      question: 'Are financing plans available?',
      answer: 'Yes, we provide various financing options to suit different needs. Our finance team can work with you to find the best solution.',
    },
    {
      question: 'What is your vehicle return policy??',
      answer: 'We offer a 7-day return policy for most of our vehicles. Please review our detailed return policy for more information.',
    },
    {
      question: 'Do your vehicles come with a warranty?',
      answer: 'Yes, all our cars come with a warranty. The duration and coverage may vary depending on the vehicle. We also offer extended warranty options.',
    },
  ];

  return (
      <div id="section-faq" className="faq-section">
        <div className="faq-contents">
          <div className="faq-left">
            <h2>Common <span className="underline-blue">Questions</span></h2>
          </div>
          <div className="faq-right">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                {faqData.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FAQ;