import React from 'react';
import styles from './KnowledgeHero.module.css';

const domains = [
  'AI Architecture',
  'Systems Design',
  'Platform Engineering',
  'DevOps / SRE',
  'Drone Systems',
  'Custom OS / ROM',
  'IoT / Edge',
  'CAT + Algorithms',
];

const signalStats = [
  { value: '12+', label: 'engineering domains' },
  { value: '5', label: 'visualization modes' },
  { value: '24/7', label: 'searchable build memory' },
];

export default function KnowledgeHero() {
  return (
    <section
      className={styles.knowledgeHero}
      style={{ '--hero-portrait': 'url("/img/landing-page-1.png")' }}>
      <div className={styles.heroMedia} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Bharath Rajiv A / Engineering Intelligence System</p>
        <h1>A living operating system for my engineering mind.</h1>
        <p className={styles.heroLede}>
          A sharp, searchable, visual-first wiki for AI architecture, distributed systems,
          platform engineering, DevOps, drones, embedded systems, quantitative reasoning,
          and the build logs behind real engineering taste.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href="/engineeringnexus/knowledge-map/">
            Explore the Map
          </a>
          <a className={styles.secondaryAction} href="/engineeringnexus/projects/private-compute-cluster/">
            View Flagship Build
          </a>
        </div>
        <div className={styles.signalGrid}>
          {signalStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.domainStrip} aria-label="Knowledge domains">
        <span className={styles.stripLabel}>Live knowledge graph</span>
        <div className={styles.domainCloud}>
          {domains.map((domain) => (
            <span key={domain}>{domain}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
