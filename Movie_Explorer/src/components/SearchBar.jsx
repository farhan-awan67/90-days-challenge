export default function SearchBar({ onSearch }) {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-3 rounded shadow border"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
