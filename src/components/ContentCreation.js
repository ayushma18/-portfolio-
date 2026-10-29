import React from 'react';
import { FaArrowRight, FaInstagram, FaTiktok } from 'react-icons/fa';
import { contentCreation } from '../data/profile';
import Section from './Section';
import styles from './ContentCreation.module.css';

const ICONS = {
  TikTok: FaTiktok,
  Instagram: FaInstagram,
};

const ContentCreation = () => (
  <Section
    id="content"
    index="06"
    eyebrow="Content"
    title="Creating in public"
    lead={contentCreation.intro}
  >
    <ul className={styles.list}>
      {contentCreation.platforms.map((platform) => {
        const Icon = ICONS[platform.name] ?? FaArrowRight;
        return (
          <li key={platform.name} className={styles.entry}>
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              data-cursor-label={platform.name}
            >
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>

              <span className={styles.body}>
                <span className={styles.name}>{platform.name}</span>
                <span className={styles.handle}>{platform.handle}</span>
                <span className={styles.note}>{platform.note}</span>
              </span>

              <FaArrowRight aria-hidden="true" className={styles.arrow} />
            </a>
          </li>
        );
      })}
    </ul>
  </Section>
);

export default ContentCreation;
