import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCheckCircle,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { profile, socials } from '../data/profile';
import Section from './Section';
import styles from './Contact.module.css';

const channels = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'ayushma-pudasaini',
    href: socials.linkedin,
    external: true,
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'ayushma18',
    href: socials.github,
    external: true,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: profile.location,
  },
];

const isLocal = () =>
  ['localhost', '127.0.0.1'].includes(window.location.hostname);

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new URLSearchParams(new FormData(form)).toString();

    // Netlify's form handler only exists on the deployed site, so a local
    // submit is acknowledged without a network call.
    if (isLocal()) {
      setStatus('sent');
      form.reset();
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      setStatus('sent');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <Section
      id="contact"
      tone="subtle"
      eyebrow="Contact"
      title="Get in touch"
      lead="Open to internships, research collaborations and interesting problems. The fastest route is email."
    >
      <div className={styles.layout}>
        <motion.ul
          className={styles.channels}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {channels.map((channel) => {
            const content = (
              <>
                <span className={styles.channelIcon}>{channel.icon}</span>
                <span className={styles.channelText}>
                  <span className={styles.channelLabel}>{channel.label}</span>
                  <span className={styles.channelValue}>{channel.value}</span>
                </span>
              </>
            );

            return (
              <li key={channel.label} className={styles.channel}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className={styles.channelLink}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={styles.channelLink}>{content}</div>
                )}
              </li>
            );
          })}
        </motion.ul>

        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {status === 'sent' ? (
            <div className={styles.success} role="status">
              <FaCheckCircle className={styles.successIcon} aria-hidden="true" />
              <h3 className={styles.successTitle}>Message sent</h3>
              <p className={styles.successBody}>
                Thanks for reaching out — I&apos;ll reply as soon as I can.
              </p>
              <button
                type="button"
                className={styles.linkButton}
                onClick={() => setStatus('idle')}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot: real people never see or fill this. */}
              <p className={styles.honeypot} aria-hidden="true">
                <label>
                  Leave this field empty
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div className={styles.field}>
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  placeholder="What would you like to talk about?"
                />
              </div>

              {status === 'error' && (
                <p className={styles.error} role="alert">
                  Something went wrong sending that. Please email me directly at{' '}
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
