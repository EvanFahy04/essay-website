import { useState } from 'react';
import EssayList from './components/EssayList';
import EssayEditor from './components/EssayEditor';

export default function App() {
  const [essays, setEssays] = useState(
    JSON.parse(localStorage.getItem('essays')) || []
  );
  const [currentEssay, setCurrentEssay] = useState(null);

  const saveEssay = (essay) => {
    let updated;
    if (essay.id) {
      updated = essays.map(e => e.id === essay.id ? essay : e);
    } else {
      essay.id = Date.now();
      updated = [essay, ...essays];
    }
    setEssays(updated);
    localStorage.setItem('essays', JSON.stringify(updated));
    setCurrentEssay(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">My Essays</h1>
      {!currentEssay ? (
        <>
          <button
            className="mb-4 px-4 py-2 bg-black text-white"
            onClick={() => setCurrentEssay({ title: '', content: '' })}
          >
            New Essay
          </button>
          <EssayList essays={essays} onSelect={setCurrentEssay} />
        </>
      ) : (
        <EssayEditor essay={currentEssay} onSave={saveEssay} onCancel={() => setCurrentEssay(null)} />
      )}
    </div>
  );
}
