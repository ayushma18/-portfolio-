import React, { useState } from 'react';
import ThankYou from './ThankYou';

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    // For local development, prevent default and show success message
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      e.preventDefault();
      setShowThankYou(true);
      // Reset form fields
      e.target.reset();
      return;
    }
    
    // For production (Netlify), prevent default and handle submission
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    
    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      setShowThankYou(true);
      e.target.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    });
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      content: "079bct030.ayushma@pcampus.edu.np"
    },
    {
      icon: "📍",
      title: "Location",
      content: "Jhamsikhel, Lalitpur, Nepal"
    },
    {
      icon: "🔗",
      title: "LinkedIn",
      content: "https://linkedin.com/in/ayushma-pudasaini-443677276"
    },
    {
      icon: "📞",
      title: "Phone",
      content: "+977-98282722469"
    },
    {
      icon: "👩‍💻",
      title: "Github",
      content: "https://github.com/ayushma18"
    },
    {
      icon: "📘",
      title: "Facebook",
      content: "https://facebook.com/ayushma.pudasaini"
    },
    {
      icon: "📸",
      title: "Instagram",
      content: "https://www.instagram.com/ayusha.020/"
    },
    {
      icon: "🎥",
      title: "YouTube",
      content: "https://youtube.com/@ayushmapudasaini"
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-2xl mb-3 block">{info.icon}</span>
                  <h4 className="font-semibold text-gray-800 mb-2">{info.title}</h4>
                  {(info.title === "LinkedIn" || info.title === "Github" || info.title === "Facebook" || info.title === "Instagram" || info.title === "YouTube") ? (
                    <a 
                      href={info.content} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {info.title}
                    </a>
                  ) : (
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Netlify Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send me a message</h3>
            
            {/* Netlify Forms with exact structure as specified */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/thank-you"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <p className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Name:
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="Your full name"
                  />
                </label>
              </p>
              
              <p className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email:
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="your.email@example.com"
                  />
                </label>
              </p>
              
              <p className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message:
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="mt-1 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-vertical"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </label>
              </p>
              
              <p>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-105 active:scale-95"
                >
                  Send
                </button>
              </p>
            </form>

          </div>
      </div>
    </div>

    {/* Thank You Modal */}
    {showThankYou && <ThankYou onClose={closeThankYou} />}
  </section>
);
};

export default Contact;