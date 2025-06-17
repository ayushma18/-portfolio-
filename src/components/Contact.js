import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Option 1: EmailJS (requires setup at emailjs.com)
      // Uncomment and configure when you set up EmailJS:
      /*
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: '079bct030.ayushma@pcampus.edu.np'
      };
      
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      
      alert('Thank you for your message! I will get back to you soon.');
      */
      
      // Option 2: Mailto (currently active)
      const subject = `Portfolio Contact: Message from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

---
This message was sent from your portfolio website contact form.
      `;
      
      const mailtoLink = `mailto:079bct030.ayushma@pcampus.edu.np?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      alert('Thank you for your message! Your email client will open to send the message.');
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again or email me directly.');
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
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
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h3 className={styles.subtitle}>Contact Information</h3>
            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.infoCard}>
                  <span className={styles.icon}>{info.icon}</span>
                  <h4 className={styles.infoTitle}>{info.title}</h4>
                  {(info.title === "LinkedIn" || info.title === "Github" || info.title === "Facebook" || info.title === "Instagram" || info.title === "YouTube") ? (
                    <a href={info.content} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      {info.title}
                    </a>
                  ) : (
                    <p className={styles.infoContent}>{info.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Your email"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={styles.textarea}
                  placeholder="Your message"
                  rows="5"
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;