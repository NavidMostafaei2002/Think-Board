import { useState } from "react";

interface SearchModalProps {
  initialQuery: string;
  onCancel: () => void;
  onSearch: (query: string) => void;
}

export default function SearchModal({
  initialQuery,
  onCancel,
  onSearch,
}: SearchModalProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <div className="modal modal-open" role="dialog">
      <form className="modal-box rounded-2xl" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold">Search notes</h3>

        <label
          htmlFor="search-input"
          className="mt-4 block text-sm font-medium"
        >
          Title or description
        </label>
        <input
          id="search-input"
          autoFocus
          className="input mt-2 w-full"
          placeholder="e.g. meeting"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="modal-action">
          <button type="button" className="btn" onClick={onCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="btn border-0 bg-(--primary)! text-white"
          >
            OK
          </button>
        </div>
      </form>
      <div className="modal-backdrop" onClick={onCancel}></div>
    </div>
  );
}
