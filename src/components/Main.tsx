import { useState } from "react";
import { useNotes } from "../hooks/useNote";
import type { NoteInput } from "../types/note";
import Header from "./Header";
import PageHeading from "./PageHeading";
import NotesGrid from "./NotesGrid";
import NoteFormModal from "./NoteFormModal";
import SearchModal from "./SearchModal";

export default function Main() {
  const { notes, loading, error, removeNote, editNote, addNote } = useNotes();
  const [showAdd, setShowAdd] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const visibleNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase()),
  );

  const handleAdd = async (note: NoteInput) => {
    const success = await addNote(note);

    if (success) {
      setShowAdd(false);
    }
  };

  const handleSearch = (text: string) => {
    setQuery(text);
    setShowSearch(false);
  };

  return (
    <div className="min-h-screen px-4 py-3 pb-24 md:px-8 md:py-5 lg:px-16 lg:py-6">
      <Header
        onAdd={() => setShowAdd(true)}
        onSearch={() => setShowSearch(true)}
      />
      <PageHeading count={visibleNotes.length} />

      {query && (
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm text-(--text-muted)">
            Results for “{query}”
          </span>
          <button className="btn btn-sm" onClick={() => setQuery("")}>
            Clear
          </button>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <span className="loading loading-ring size-24"></span>
        </div>
      )}
      {error && <p className="text-(--danger)">{error}</p>}
      {!loading && !error && visibleNotes.length === 0 && (
        <p className="text-(--text-muted)">No notes found.</p>
      )}
      {!loading && !error && (
        <NotesGrid
          notes={visibleNotes}
          onDelete={removeNote}
          onEdit={editNote}
        />
      )}

      {showAdd && (
        <NoteFormModal
          heading="Create new note"
          submitLabel="Save note"
          onCancel={() => setShowAdd(false)}
          onSave={handleAdd}
        />
      )}

      {showSearch && (
        <SearchModal
          initialQuery={query}
          onCancel={() => setShowSearch(false)}
          onSearch={handleSearch}
        />
      )}
    </div>
  );
}
