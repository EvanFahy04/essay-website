export default function EssayList({ essays, onSelect }) {
  if (!essays || essays.length === 0) return <p>No essays yet.</p>;

  return (
    <ul>
      {essays.map((essay) => (
        <li key={essay.id} className="mb-2 cursor-pointer hover:underline">
          <span onClick={() => onSelect(essay)}>{essay.title || 'Untitled Essay'}</span>
        </li>
      ))}
    </ul>
  );
}
