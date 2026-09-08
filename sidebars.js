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
    'engineeringnexus/platform-engineering',
    {
      type: 'category',
      label: 'DevOps',
      collapsible: true,
      collapsed: true,
      items: ['devops/overview'],
    },
    {
      type: 'category',
      label: 'Infrastructure as a Service',
      collapsible: true,
      collapsed: true,
      items: [
        'iaas/overview',
        'engineeringnexus/projects/private-compute-cluster',
        'OpenStack/Private Compute Cluster/summary',
        'OpenStack/Private Compute Cluster/Architecture Overview/NeutronNetworkArchcitecture',
      ],
    },
    {
      type: 'category',
      label: 'CAT',
      collapsible: true,
      collapsed: true,
      items: ['engineeringnexus/cat-quant-cheat-sheet', 'cat/varc', 'cat/dilr'],
    },
    {
      type: 'category',
      label: 'Competitive Coding',
      collapsible: true,
      collapsed: true,
      items: [
        'engineeringnexus/problem-solving',
        'competitive-coding/leetcode',
        'competitive-coding/katas',
        'competitive-coding/codeforces',
      ],
    },
    {
      type: 'category',
      label: 'SDR Radio',
      collapsible: true,
      collapsed: true,
      items: ['sdr-radio/overview'],
    },
    {
      type: 'category',
      label: 'Hangar',
      collapsible: true,
      collapsed: true,
      items: ['hangar/overview'],
    },
    {
      type: 'category',
      label: 'MCP',
      collapsible: true,
      collapsed: true,
      items: ['mcp/overview'],
    },
    {
      type: 'category',
      label: 'Custom AI Models',
      collapsible: true,
      collapsed: true,
      items: ['custom-ai-models/overview'],
    },
    {
      type: 'category',
      label: 'Games',
      collapsible: true,
      collapsed: true,
      items: ['games/overview'],
    },
    {
      type: 'category',
      label: 'Exploratory Projects',
      collapsible: true,
      collapsed: true,
      items: ['exploratory-projects/overview'],
    },
    {
      type: 'category',
      label: 'More Engineering',
      collapsible: true,
      collapsed: true,
      items: [
        'engineeringnexus/ai-architecture',
        'engineeringnexus/hardware-edge',
        'engineeringnexus/build-logs',
      ],
    },
    {
      type: 'category',
      label: 'Visual Systems',
      collapsible: true,
      collapsed: true,
      items: ['engineeringnexus/visual-lab'],
    },
  ],
};

module.exports = sidebars;
