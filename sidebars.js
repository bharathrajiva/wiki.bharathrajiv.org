/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsible: false,
      collapsed: false,
      items: [
        'engineeringnexus/about',
        'engineeringnexus/knowledge-map',
        'engineeringnexus/content-system',
      ],
    },
    {
      type: 'category',
      label: 'Engineering Tracks',
      collapsible: false,
      collapsed: false,
      items: [
        'engineeringnexus/ai-architecture',
        'engineeringnexus/platform-engineering',
        'engineeringnexus/hardware-edge',
        'engineeringnexus/problem-solving',
        'engineeringnexus/cat-quant-cheat-sheet',
        'engineeringnexus/build-logs',
      ],
    },
    {
      type: 'category',
      label: 'Visual Systems',
      collapsible: false,
      collapsed: false,
      items: [
        'engineeringnexus/visual-lab',
        'engineeringnexus/projects/private-compute-cluster',
        {
          type: 'category',
          label: 'OpenStack Private Compute Cluster',
          collapsible: true,
          collapsed: true,
          items: [
            'OpenStack/Private Compute Cluster/summary',
            'OpenStack/Private Compute Cluster/Architecture Overview/NeutronNetworkArchcitecture',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
