import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function EssayEditor({ essay, onSave, onCancel }) {
  const [title, setTitle] = useState(essay.title);
  const [content, setContent] = useState(essay.content);

  return (
    <div>
      <input
        className="w-full mb-2 p-2 text-xl border"
        placeholder="Essay Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full h-64 p-2 border"
        placeholder="Start writing..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="mt-2 flex gap-2">
        <button className="px-4 py-2 bg-black text-white" onClick={() => onSave({ ...essay, title, content })}>Save</button>
        <button className="px-4 py-2 border" onClick={onCancel}>Cancel</button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Preview</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
