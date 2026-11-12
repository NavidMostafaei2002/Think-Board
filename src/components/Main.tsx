import { useState } from "react";
import { useNotes } from "../hooks/useNote";
import type { NoteInput } from "../types/note";
import Header from "./Header";
import PageHeading from "./PageHeading";
import NotesGrid from "./NotesGrid";
import NoteFormModal from "./NoteFormModal";

export default function Main() {
  const { notes, loading, error, removeNote, editNote, addNote } = useNotes();
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = async (note: NoteInput) => {
    const success = await addNote(note);

    if (success) {
      setShowAdd(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-3 md:px-8 md:py-5 lg:px-16 lg:py-6">
      <Header onAdd={() => setShowAdd(true)} />
      <PageHeading count={notes.length} />

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <span className="loading loading-ring size-24"></span>
        </div>
      )}
      {error && <p className="text-(--danger)">{error}</p>}
      {!loading && !error && (
        <NotesGrid notes={notes} onDelete={removeNote} onEdit={editNote} />
      )}

      {showAdd && (
        <NoteFormModal
          heading="Create new note"
          submitLabel="Save note"
          onCancel={() => setShowAdd(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
}
