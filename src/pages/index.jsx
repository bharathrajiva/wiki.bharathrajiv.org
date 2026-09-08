import React from 'react';
import Layout from '@theme/Layout';
import KnowledgeHero from '../components/KnowledgeHero';
import KnowledgeGrid from '../components/KnowledgeGrid';
import VisualizationStack from '../components/VisualizationStack';
import styles from './index.module.css';

const principles = [
  {
    principle: 'Modern by default',
    detail: 'Strong visual hierarchy, dark-mode-first surfaces, sharp typography, and a design language that feels current.',
  },
  {
    principle: 'Searchable knowledge',
    detail: 'Consistent frontmatter, tags, domain pages, and short summaries so notes stay findable as the wiki grows.',
  },
  {
    principle: 'Visual architecture',
    detail: 'Mermaid, Excalidraw exports, polished diagrams, decision records, and topology maps live beside the writing.',
  },
  {
    principle: 'Proof of excellence',
    detail: 'Every flagship page should expose taste: constraints, reasoning, build quality, and hard-won lessons.',
  },
];

export default function Home() {
  return (
    <Layout
      title="Engineering Nexus"
      description="Bharath Rajiv A's engineering wiki for architecture notes, build logs, diagrams, and searchable systems thinking.">
      <KnowledgeHero />
      <KnowledgeGrid />
      <VisualizationStack />
      <div className={styles.homeProse}>
        <h2>What This Wiki Is Becoming</h2>
        <p>
          This site is being rebuilt as a public engineering memory system: part portfolio, part
          research notebook, part architecture lab. The goal is not to merely list projects, but
          to show how ideas become systems through diagrams, constraints, tradeoffs, experiments,
          failures, and implementation notes.
        </p>

        <h2>Operating Principles</h2>
        <table>
          <thead>
            <tr>
              <th>Principle</th>
              <th>How it shows up</th>
            </tr>
          </thead>
          <tbody>
            {principles.map((row) => (
              <tr key={row.principle}>
                <td>{row.principle}</td>
                <td>{row.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Fast Paths</h2>
        <ul>
          <li>
            Start with the <a href="/engineeringnexus/knowledge-map/">Knowledge Map</a> to
            understand the taxonomy.
          </li>
          <li>
            Use the <a href="/engineeringnexus/visual-lab/">Visual Lab</a> for diagram standards
            and architecture storytelling.
          </li>
          <li>
            Open the{' '}
            <a href="/engineeringnexus/projects/private-compute-cluster/">
              Private Compute Cluster
            </a>{' '}
            as the first flagship build.
          </li>
          <li>
            Add new notes using the <a href="/engineeringnexus/content-system/">Content System</a>{' '}
            so the site remains easy to update.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
