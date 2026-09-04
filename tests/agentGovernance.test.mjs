import test from 'node:test';
import assert from 'node:assert/strict';
import {
  AGENT_STATES,
  CAPABILITY_GATE_STAGES,
  canAgentAct,
  evaluateCapabilityGate,
  isValidAgentId,
  validateAgentRecord
} from '../src/domain/agentGovernance.js';

test('accepts human-readable WC Agent IDs and rejects secret-like IDs', () => {
  assert.equal(isValidAgentId('WC01'), true);
  assert.equal(isValidAgentId('WC104'), true);
  assert.equal(isValidAgentId('sk-WC01-abcdef'), false);
  assert.equal(isValidAgentId('WC00'), false);
});

test('validates required identity fields and lifecycle states', () => {
  const good = validateAgentRecord({
    agent_id: 'WC42',
    name: 'Avery',
    role: 'Recruiting Specialist',
    department: 'Talent',
    state: 'working'
  });
  assert.equal(good.valid, true);

  const bad = validateAgentRecord({ agent_id: 'api_123', state: 'running' });
  assert.equal(bad.valid, false);
  assert.ok(bad.errors.some((error) => error.code === 'invalid_agent_id'));
  assert.ok(bad.errors.some((error) => error.code === 'invalid_state'));
});

test('capability gate is pending until every required stage passes', () => {
  const partial = evaluateCapabilityGate({
    identity_source_verification: { status: 'passed' }
  });
  assert.equal(partial.status, 'pending');
  assert.equal(partial.incomplete.length, CAPABILITY_GATE_STAGES.length - 1);

  const allPassed = Object.fromEntries(
    CAPABILITY_GATE_STAGES.map((stage) => [stage, { status: 'passed', evidence: 'verified' }])
  );
  assert.equal(evaluateCapabilityGate(allPassed).status, 'passed');
});

test('blocks autonomous action for approval, failed gate, or missing permission', () => {
  assert.deepEqual(
    canAgentAct({ state: 'awaiting_approval', permissions: ['email.send'], requiredPermission: 'email.send', gateStatus: 'passed' }),
    { allowed: false, reason: 'human_approval_required' }
  );
  assert.deepEqual(
    canAgentAct({ state: 'working', permissions: ['email.send'], requiredPermission: 'email.send', gateStatus: 'pending' }),
    { allowed: false, reason: 'capability_gate_not_passed' }
  );
  assert.deepEqual(
    canAgentAct({ state: 'working', permissions: [], requiredPermission: 'email.send', gateStatus: 'passed' }),
    { allowed: false, reason: 'permission_denied' }
  );
  assert.deepEqual(
    canAgentAct({ state: 'working', permissions: ['email.send'], requiredPermission: 'email.send', gateStatus: 'passed' }),
    { allowed: true, reason: null }
  );
});

test('canonical lifecycle contains every required UI state', () => {
  assert.deepEqual(AGENT_STATES, ['idle', 'working', 'blocked', 'awaiting_approval', 'completed', 'failed']);
});
