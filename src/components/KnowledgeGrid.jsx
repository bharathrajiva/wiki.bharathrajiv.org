import React from 'react';
import styles from './KnowledgeGrid.module.css';

const tracks = [
  {
    title: 'AI Architecture',
    description: 'Agents, retrieval systems, model orchestration, evaluation loops, and applied AI systems.',
    href: '/engineeringnexus/ai-architecture/',
    meta: 'systems / agents / llms',
  },
  {
    title: 'Platform Engineering',
    description: 'Cloud platforms, OpenStack, Kubernetes, internal developer platforms, SRE, and DevOps.',
    href: '/engineeringnexus/platform-engineering/',
    meta: 'cloud / sre / devops',
  },
  {
    title: 'Architecture Gallery',
    description: 'Mermaid flows, Excalidraw sketches, topology maps, and decision records for complex systems.',
    href: '/engineeringnexus/visual-lab/',
    meta: 'diagrams / decisions / maps',
  },
  {
    title: 'Problem Solving',
    description: 'LeetCode, algorithms, CAT Quant, VARC, DILR, mental models, and competitive reasoning.',
    href: '/engineeringnexus/problem-solving/',
    meta: 'algorithms / cat / math',
  },
  {
    title: 'Hardware + Edge',
    description: 'Drone design, IoT, embedded electronics, custom OS work, ROMs, and edge computing.',
    href: '/engineeringnexus/hardware-edge/',
    meta: 'drones / iot / embedded',
  },
  {
    title: 'Build Logs',
    description: 'Raw engineering notes, failure analysis, implementation journals, experiments, and retrospectives.',
    href: '/engineeringnexus/build-logs/',
    meta: 'logs / experiments / blogs',
  },
];

export default function KnowledgeGrid() {
  return (
    <section className={styles.knowledgeGrid} aria-label="Engineering tracks">
      {tracks.map((track) => (
        <a className={styles.trackCard} href={track.href} key={track.href}>
          <span>{track.meta}</span>
          <h2>{track.title}</h2>
          <p>{track.description}</p>
        </a>
      ))}
    </section>
  );
}
