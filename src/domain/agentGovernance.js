export const AGENT_STATES = Object.freeze([
  'idle',
  'working',
  'blocked',
  'awaiting_approval',
  'completed',
  'failed'
]);

export const CAPABILITY_GATE_STAGES = Object.freeze([
  'identity_source_verification',
  'static_semantic_inspection',
  'supply_chain_inspection',
  'permission_analysis',
  'secret_exfiltration_analysis',
  'risk_scoring',
  'red_room_behavioral_verification',
  'claimed_vs_observed_comparison',
  'fingerprint_version_approval',
  'continuous_revalidation'
]);

const WC_AGENT_ID = /^WC(?:0[1-9]|[1-9][0-9]*)$/;

export function isValidAgentId(value) {
  return typeof value === 'string' && WC_AGENT_ID.test(value.trim());
}

export function validateAgentRecord(agent = {}) {
  const errors = [];
  const required = ['agent_id', 'name', 'role', 'department'];

  required.forEach((field) => {
    if (!agent[field] || String(agent[field]).trim() === '') {
      errors.push({ field, code: 'required', message: `${field} is required.` });
    }
  });

  if (agent.agent_id && !isValidAgentId(agent.agent_id)) {
    errors.push({
      field: 'agent_id',
      code: 'invalid_agent_id',
      message: 'Agent ID must use the human-readable WC sequence format, such as WC01 or WC104.'
    });
  }

  if (agent.state && !AGENT_STATES.includes(agent.state)) {
    errors.push({
      field: 'state',
      code: 'invalid_state',
      message: `Agent state must be one of: ${AGENT_STATES.join(', ')}.`
    });
  }

  return { valid: errors.length === 0, errors };
}

export function evaluateCapabilityGate(checks = {}) {
  const normalized = CAPABILITY_GATE_STAGES.map((stage) => ({
    stage,
    status: checks[stage]?.status ?? 'not_run',
    evidence: checks[stage]?.evidence ?? null
  }));

  const failed = normalized.filter((item) => item.status === 'failed');
  const incomplete = normalized.filter((item) => !['passed', 'failed'].includes(item.status));

  return {
    status: failed.length ? 'failed' : incomplete.length ? 'pending' : 'passed',
    failed,
    incomplete,
    checks: normalized
  };
}

export function canAgentAct({ state, permissions = [], requiredPermission, gateStatus }) {
  if (!AGENT_STATES.includes(state)) {
    return { allowed: false, reason: 'invalid_state' };
  }
  if (state === 'blocked' || state === 'failed') {
    return { allowed: false, reason: state };
  }
  if (state === 'awaiting_approval') {
    return { allowed: false, reason: 'human_approval_required' };
  }
  if (gateStatus !== 'passed') {
    return { allowed: false, reason: 'capability_gate_not_passed' };
  }
  if (requiredPermission && !permissions.includes(requiredPermission)) {
    return { allowed: false, reason: 'permission_denied' };
  }
  return { allowed: true, reason: null };
}

export function createAuditEvent({ agentId, action, state, outcome, actor = 'system', details = {} }) {
  if (!isValidAgentId(agentId)) {
    throw new Error('A valid WC Agent ID is required for audit events.');
  }
  if (!action) throw new Error('Audit action is required.');
  if (state && !AGENT_STATES.includes(state)) throw new Error('Audit state is invalid.');

  return {
    id: `${agentId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    timestamp: new Date().toISOString(),
    agent_id: agentId,
    actor,
    action,
    state: state ?? null,
    outcome: outcome ?? null,
    details
  };
}
