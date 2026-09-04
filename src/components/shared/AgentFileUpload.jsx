import React, { useState, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Upload, Link as LinkIcon, Camera, FileText, X, Loader2, Check } from 'lucide-react';

/**
 * AgentFileUpload — standardized panel for uploading information to an agent.
 * Supports: file from computer, file from URL, camera/photo, and text notes.
 *
 * @param {string} agentId - The WC Agent ID (for display)
 * @param {function} onUpload - callback(uploads) when user submits
 */
export default function AgentFileUpload({ agentId, onUpload }) {
  const [tab, setTab] = useState('file');
  const [url, setUrl] = useState('');
  const [note, setNote] = useState('');
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const fileRef = useRef(null);
  const cameraRef = useRef(null);

  const handleFiles = (fileList) => {
    if (!fileList || !fileList.length) return;
    const arr = Array.from(fileList).map(f => ({ name: f.name, size: f.size, type: f.type, file: f }));
    setFiles(prev => [...prev, ...arr]);
  };

  const submit = async () => {
    setUploading(true);
    try {
      const uploads = [];
      if (files.length) {
        for (const f of files) {
          const { file_url } = await base44.integrations.Core.UploadFile({ file: f.file });
          uploads.push({ type: 'file', name: f.name, url: file_url });
        }
      }
      if (url.trim()) uploads.push({ type: 'url', url: url.trim() });
      if (note.trim()) uploads.push({ type: 'note', text: note.trim() });
      if (onUpload) onUpload(uploads);
      setFiles([]); setUrl(''); setNote('');
      setDone(true);
      setTimeout(() => setDone(false), 2500);
    } catch (e) {
      // bubble up — errors come back to fix
    }
    setUploading(false);
  };

  const hasContent = files.length > 0 || url.trim() || note.trim();

  return (
    <div className="rounded-xl border border-border bg-muted/40 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
          <Upload className="w-3.5 h-3.5" /> Upload to {agentId || 'Agent'}
        </p>
        {done && <span className="text-xs text-green-400 flex items-center gap-1"><Check className="w-3 h-3" /> Sent</span>}
      </div>

      <div className="flex gap-1.5">
        {[
          { id: 'file', label: 'File', icon: FileText },
          { id: 'url', label: 'URL', icon: LinkIcon },
          { id: 'camera', label: 'Camera', icon: Camera },
          { id: 'note', label: 'Note', icon: FileText },
        ].map(t => {
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                tab === t.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-3 h-3" /> {t.label}
            </button>
          );
        })}
      </div>

      {tab === 'file' && (
        <div
          onClick={() => fileRef.current?.click()}
          className="cursor-pointer rounded-lg border-2 border-dashed border-border hover:border-primary/50 p-6 text-center transition-colors"
        >
          <input ref={fileRef} type="file" multiple className="hidden" onChange={e => handleFiles(e.target.files)} />
          <FileText className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Click to select files from your computer</p>
        </div>
      )}

      {tab === 'url' && (
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="https://example.com/document.pdf"
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
        />
      )}

      {tab === 'camera' && (
        <div
          onClick={() => cameraRef.current?.click()}
          className="cursor-pointer rounded-lg border-2 border-dashed border-border hover:border-primary/50 p-6 text-center transition-colors"
        >
          <input ref={cameraRef} type="file" accept="image/*" capture="environment" className="hidden" onChange={e => handleFiles(e.target.files)} />
          <Camera className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Take a photo or choose from camera roll</p>
        </div>
      )}

      {tab === 'note' && (
        <textarea
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="Type a note or instructions for the agent…"
          rows={3}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
        />
      )}

      {files.length > 0 && (
        <div className="space-y-1.5">
          {files.map((f, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-background border border-border px-3 py-2">
              <span className="text-xs text-foreground truncate flex items-center gap-2">
                <FileText className="w-3 h-3 text-muted-foreground shrink-0" />
                {f.name}
                <span className="text-muted-foreground">({Math.round(f.size / 1024)}KB)</span>
              </span>
              <button onClick={() => setFiles(prev => prev.filter((_, idx) => idx !== i))} className="text-muted-foreground hover:text-destructive">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={submit}
        disabled={!hasContent || uploading}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold py-2.5 transition-all disabled:opacity-40"
      >
        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
        {uploading ? 'Uploading…' : 'Send to Agent'}
      </button>
    </div>
  );
}