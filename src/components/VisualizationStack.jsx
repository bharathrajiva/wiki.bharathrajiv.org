import React from 'react';
import styles from './VisualizationStack.module.css';

const modes = [
  {
    name: 'Mermaid',
    use: 'Fast architecture flows, sequences, state machines, and dependency maps directly in Markdown.',
  },
  {
    name: 'Docusaurus-style Docs',
    use: 'Clean reference pages with crisp hierarchy, short summaries, code blocks, and searchable metadata.',
  },
  {
    name: 'Excalidraw',
    use: 'Sketch-first system design for rough topology, brain dumps, interviews, and architecture thinking.',
  },
  {
    name: 'Polished SVG / PNG',
    use: 'Final diagrams for flagship builds, public posts, and portfolio-grade visual storytelling.',
  },
  {
    name: 'Decision Records',
    use: 'Architecture decisions, constraints, alternatives, tradeoffs, failure modes, and implementation notes.',
  },
];

export default function VisualizationStack() {
  return (
    <section className={styles.visualStack}>
      <div>
        <p className={styles.eyebrow}>Visualization Layer</p>
        <h2>Designed for architecture, not just articles.</h2>
        <p>
          Every serious system gets multiple representations: fast sketches, precise diagrams,
          implementation notes, polished visual references, and decision records that explain
          why the design exists.
        </p>
      </div>
      <div className={styles.visualModes}>
        {modes.map((mode) => (
          <article key={mode.name}>
            <strong>{mode.name}</strong>
            <p>{mode.use}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
