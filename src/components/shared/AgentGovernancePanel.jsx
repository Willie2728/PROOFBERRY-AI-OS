import React from 'react';
import { AGENT_STATES, evaluateCapabilityGate, validateAgentRecord } from '../../domain/agentGovernance.js';
import AgentIdBadge from './AgentIdBadge.jsx';

const STATE_LABELS = {
  idle: 'Idle',
  working: 'Working',
  blocked: 'Blocked',
  awaiting_approval: 'Awaiting approval',
  completed: 'Completed',
  failed: 'Failed'
};

export default function AgentGovernancePanel({
  agent,
  capabilityChecks = {},
  auditEvents = [],
  onApprove,
  onReject
}) {
  const validation = validateAgentRecord(agent);
  const gate = evaluateCapabilityGate(capabilityChecks);
  const state = AGENT_STATES.includes(agent?.state) ? agent.state : 'blocked';
  const needsApproval = state === 'awaiting_approval';

  return (
    <section aria-label="Agent governance" className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">{agent?.name || 'Unnamed agent'}</h2>
            {agent?.agent_id ? <AgentIdBadge agentId={agent.agent_id} /> : null}
          </div>
          <p className="text-sm text-slate-600">{agent?.role || 'Role not assigned'}</p>
        </div>
        <div role="status" aria-live="polite" data-agent-state={state} className="rounded-full border px-3 py-1 text-sm font-medium">
          {STATE_LABELS[state]}
        </div>
      </div>

      {!validation.valid ? (
        <div role="alert" className="mt-4 rounded-lg border p-3">
          <strong>Identity record needs attention.</strong>
          <ul className="mt-2 list-disc pl-5 text-sm">
            {validation.errors.map((error) => <li key={`${error.field}-${error.code}`}>{error.message}</li>)}
          </ul>
        </div>
      ) : null}

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border p-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Capability Gate</div>
          <div className="mt-1 text-base font-semibold">{gate.status}</div>
          <div className="mt-2 text-sm text-slate-600">
            {gate.failed.length ? `${gate.failed.length} failed check(s)` : gate.incomplete.length ? `${gate.incomplete.length} check(s) not complete` : 'All required checks passed'}
          </div>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Permissions</div>
          <div className="mt-2 text-sm">{agent?.permissions?.length ? agent.permissions.join(', ') : 'No permissions granted'}</div>
        </div>
        <div className="rounded-lg border p-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Escalation owner</div>
          <div className="mt-2 text-sm">{agent?.escalation_owner || 'Not assigned'}</div>
        </div>
      </div>

      {needsApproval ? (
        <div className="mt-5 rounded-lg border p-4" role="region" aria-label="Human approval required">
          <div className="font-semibold">Human approval required</div>
          <p className="mt-1 text-sm text-slate-600">This agent cannot continue autonomously until an authorized person approves or rejects the pending action.</p>
          <div className="mt-3 flex gap-2">
            <button type="button" onClick={onApprove} disabled={!onApprove} className="rounded-md border px-3 py-2 text-sm font-medium">Approve</button>
            <button type="button" onClick={onReject} disabled={!onReject} className="rounded-md border px-3 py-2 text-sm font-medium">Reject</button>
          </div>
        </div>
      ) : null}

      <div className="mt-5">
        <h3 className="font-semibold">Audit history</h3>
        {auditEvents.length ? (
          <ol className="mt-2 space-y-2">
            {auditEvents.map((event) => (
              <li key={event.id} className="rounded-lg border p-3 text-sm">
                <div className="font-medium">{event.action}</div>
                <div className="text-slate-600">{event.timestamp} · {event.outcome || event.state || 'recorded'}</div>
              </li>
            ))}
          </ol>
        ) : <p className="mt-2 text-sm text-slate-600">No auditable actions recorded yet.</p>}
      </div>
    </section>
  );
}
