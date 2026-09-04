import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import ReactMarkdown from 'react-markdown';
import { Send, Loader2, X, Bot, Paperclip, Share2 } from 'lucide-react';
import AgentFileUpload from '@/components/shared/AgentFileUpload';
import AgentExportPanel from '@/components/shared/AgentExportPanel';

export default function AgentChat({ agentName, title, agentId, onClose }) {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let unsub = () => {};
    let cancelled = false;
    (async () => {
      try {
        const convos = await base44.agents.listConversations({ agent_name: agentName });
        let conv;
        if (convos && convos.length) {
          conv = await base44.agents.getConversation(convos[0].id);
        } else {
          conv = await base44.agents.createConversation({ agent_name: agentName, metadata: { name: title, description: title } });
        }
        if (cancelled) return;
        setConversation(conv);
        setMessages(conv.messages || []);
        setLoading(false);
        unsub = base44.agents.subscribeToConversation(conv.id, (data) => {
          setMessages((data && data.messages) || []);
        });
      } catch {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; unsub(); };
  }, [agentName]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const send = async () => {
    if (!input.trim() || !conversation || sending) return;
    const text = input.trim();
    setInput('');
    setSending(true);
    try {
      const updated = await base44.agents.addMessage(conversation, { role: 'user', content: text });
      setConversation(updated);
    } catch {}
    setSending(false);
  };

  if (loading) {
    return <div className="flex items-center justify-center h-full"><Loader2 className="w-6 h-6 animate-spin text-primary" /></div>;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div>
          <div>
            <p className="font-heading font-bold text-sm text-foreground">{title}</p>
            <p className="text-xs text-muted-foreground">{agentId || 'Agent'} · AI HR Expert</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <AgentExportPanel agent={{ agent_id: agentId, name: title, role: 'AI HR Expert' }} />
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"><X className="w-4 h-4" /></button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground text-sm py-10">Ask a question to start the consultation.</div>
        )}
        {messages.map((m, i) => {
          const isUser = m.role === 'user';
          return (
            <div key={i} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${isUser ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
                {isUser
                  ? <p className="whitespace-pre-line">{m.content}</p>
                  : <div className="text-sm leading-relaxed"><ReactMarkdown>{m.content || ''}</ReactMarkdown></div>}
                {m.tool_calls && m.tool_calls.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {m.tool_calls.map((tc, j) => (
                      <div key={j} className="text-xs flex items-center gap-1.5 text-muted-foreground">
                        <Loader2 className="w-3 h-3 animate-spin" /> {tc.name || 'tool'}…
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showUpload && (
        <div className="px-4 pb-2">
          <AgentFileUpload agentId={agentId} onUpload={(uploads) => {
            const summary = uploads.map(u => u.type === 'file' ? `📎 ${u.name}` : u.type === 'url' ? `🔗 ${u.url}` : `📝 ${u.text}`).join('\n');
            if (conversation) {
              base44.agents.addMessage(conversation, { role: 'user', content: `Uploaded context:\n${summary}` });
            }
            setShowUpload(false);
          }} />
        </div>
      )}

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <button
            onClick={() => setShowUpload(!showUpload)}
            className={`p-2.5 rounded-xl transition-colors ${showUpload ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'}`}
            title="Upload files, URLs, or photos"
          >
            <Paperclip className="w-4 h-4" />
          </button>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="Ask the HR expert…"
            className="flex-1 bg-muted border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <button onClick={send} disabled={!input.trim() || sending} className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 rounded-xl transition-all hover:scale-105 disabled:opacity-40 flex items-center justify-center">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}