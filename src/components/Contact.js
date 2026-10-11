import React, { useState } from 'react';
import { profile, socials } from '../data/profile';
import Section from './Section';
import styles from './Contact.module.css';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  {
    label: 'LinkedIn',
    value: 'ayushma-pudasaini',
    href: socials.linkedin,
    external: true,
  },
  { label: 'GitHub', value: 'ayushma18', href: socials.github, external: true },
  { label: 'Location', value: profile.location },
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
      index="07"
      tone="subtle"
      eyebrow="Contact"
      title="Get in touch"
      lead="Open to internships, research collaborations and interesting problems. The fastest route is email."
    >
      <div className={styles.layout}>
        <dl className={styles.channels}>
          {channels.map((channel) => (
            <div key={channel.label} className={styles.channel}>
              <dt className={styles.channelLabel}>{channel.label}</dt>
              <dd className={styles.channelValue}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    className={styles.channelLink}
                    {...(channel.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {channel.value}
                  </a>
                ) : (
                  channel.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className={styles.formWrap}>
          {status === 'sent' ? (
            <div className={styles.success} role="status">
              <p className={styles.successLabel}>Sent</p>
              <h3 className={styles.successTitle}>Thanks — that reached me.</h3>
              <p className={styles.successBody}>
                I&apos;ll reply as soon as I can.
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
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
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
        </div>
      </div>
    </Section>
  );
};

export default Contact;
