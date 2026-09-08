import React from 'react';
import { useLocation } from '@docusaurus/router';
import OriginalFooter from '@theme-original/Footer';

export default function Footer(props) {
  const { pathname } = useLocation();
  const isHomepage = pathname === '/';

  if (isHomepage) {
    return (
      <footer className="footer footer--minimal">
        Bharath Rajiv A - Engineering Nexus - Systems, AI, infrastructure, and edge hardware
      </footer>
    );
  }

  return <OriginalFooter {...props} />;
}
