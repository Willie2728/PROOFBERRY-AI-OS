import React, { useState } from 'react';
import {
  Download, Mail, Link2, FileText, FileSpreadsheet, Share2, MessageSquare,
  Cloud, Send, Copy, Check, Printer, X
} from 'lucide-react';

/**
 * AgentExportPanel — standardized export & share panel for agent work.
 * Provides every common export/share method: PDF, CSV, email, copy link,
 * share with ChatGPT, share with contacts, print, Dropbox, and more.
 *
 * @param {object} agent - { agent_id, name, role, specialty, ... }
 * @param {function} onExport - callback(format, data) when user picks an export
 */
export default function AgentExportPanel({ agent, onExport }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const agentSummary = agent
    ? `Agent: ${agent.name || 'Unknown'} (${agent.agent_id || 'N/A'})\nRole: ${agent.role || ''}\nSpecialty: ${agent.specialty || ''}\n\nThis agent is part of the Wilkerson Collective workforce.`
    : '';

  const handleCopyLink = () => {
    const link = `${window.location.origin}/ai-workforce?agent=${agent?.agent_id || ''}`;
    navigator.clipboard?.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmail = () => {
    const subject = `Wilkerson Collective Agent: ${agent?.name || ''} (${agent?.agent_id || ''})`;
    const body = agentSummary;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleChatGPT = () => {
    const prompt = `Here is information about a Wilkerson Collective AI agent. Please analyze and summarize:\n\n${agentSummary}`;
    window.open(`https://chat.openai.com/?q=${encodeURIComponent(prompt)}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = (format) => {
    if (onExport) onExport(format, agentSummary);
    if (format === 'pdf') {
      window.print();
    } else if (format === 'csv') {
      const blob = new Blob([`Field,Value\nAgent ID,${agent?.agent_id || ''}\nName,${agent?.name || ''}\nRole,${agent?.role || ''}\nSpecialty,${agent?.specialty || ''}\nStatus,${agent?.status || ''}\n`], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `agent-${agent?.agent_id || 'export'}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } else if (format === 'txt') {
      const blob = new Blob([agentSummary], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `agent-${agent?.agent_id || 'export'}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const EXPORTS = [
    { id: 'pdf', label: 'PDF', icon: FileText, action: () => handleDownload('pdf') },
    { id: 'csv', label: 'CSV', icon: FileSpreadsheet, action: () => handleDownload('csv') },
    { id: 'txt', label: 'Text File', icon: FileText, action: () => handleDownload('txt') },
    { id: 'email', label: 'Email', icon: Mail, action: handleEmail },
    { id: 'copy', label: copied ? 'Copied!' : 'Copy Link', icon: copied ? Check : Link2, action: handleCopyLink },
    { id: 'chatgpt', label: 'Share with ChatGPT', icon: MessageSquare, action: handleChatGPT },
    { id: 'print', label: 'Print', icon: Printer, action: handlePrint },
    { id: 'dropbox', label: 'Dropbox', icon: Cloud, action: () => window.open('https://www.dropbox.com/home', '_blank') },
    { id: 'contacts', label: 'Share with Contacts', icon: Send, action: () => {
      if (navigator.share) {
        navigator.share({ title: `Agent ${agent?.agent_id || ''}`, text: agentSummary });
      } else {
        handleEmail();
      }
    }},
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-1.5 rounded-lg border border-border bg-muted hover:bg-muted/70 px-3 py-2 text-xs font-bold text-foreground transition-colors"
      >
        <Share2 className="w-3.5 h-3.5" /> Export & Share
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-heading font-bold text-foreground">Export & Share</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {agent?.name || 'Agent'} · {agent?.agent_id || ''}
                </p>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {EXPORTS.map(exp => {
                const Icon = exp.icon;
                return (
                  <button
                    key={exp.id}
                    onClick={exp.action}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-muted/40 hover:border-primary/40 hover:bg-muted p-3 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-[11px] font-semibold text-foreground text-center leading-tight">{exp.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 rounded-lg border border-border bg-muted/30 p-3">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Agent Summary</p>
              <pre className="text-xs text-foreground whitespace-pre-wrap font-mono leading-relaxed">{agentSummary}</pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
}