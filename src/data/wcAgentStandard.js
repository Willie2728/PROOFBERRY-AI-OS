export const wcAgentStandard = {
  name: 'Wilkerson Collective Agent ID Standard',
  prefix: 'WC',
  format: 'WC01, WC02, WC03 ... WC99, then WC100+',
  statement: 'Every Wilkerson Collective AI agent, AI employee, SYNTHSAPIEN, sub-agent, avatar worker, or autonomous worker receives a name and a simple WC Agent ID so users can see who is working, what they did, what they are doing, and what they will do next.',
  differentiators: [
    'Simple inventory-style IDs, not API-key-looking identifiers.',
    'Photorealistic/rigged worker avatars where the product calls for visible digital humans.',
    'Visible workplace environments so customers do not have to blindly trust hidden automations.',
    'Panels and dashboards showing completed work, current work, upcoming work, proof trails, and outcomes.',
    'Uniform upload/feed controls: computer file, URL, browser context, camera, add photo, and notes.',
    'Uniform export/share controls: PDF, CSV, text, print, email, share link, Dropbox, ChatGPT handoff, contacts, CRM, mail, and social destinations.'
  ],
  requiredFields: [
    'agentId', 'agent_id', 'name', 'role', 'title', 'department', 'specialty', 'descriptor',
    'capabilities', 'subAgents', 'supervisor', 'accessLevel', 'operatingMode', 'proofScore',
    'currentFocus', 'workHistory', 'activeWork', 'nextActions', 'intakeChannels', 'exportChannels'
  ],
  exampleQuestion: 'What is Agent WC010 doing?',
  exampleAnswerShape: ['Identity', 'Purpose', 'Completed work', 'Current work', 'Upcoming work', 'Supervisor', 'Proof/audit status']
};
