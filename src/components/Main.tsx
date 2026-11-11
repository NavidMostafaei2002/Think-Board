import { useNotes } from "../hooks/useNote";
import Header from "./Header";
import PageHeading from "./PageHeading";
import NotesGrid from "./NotesGrid";

export default function Main() {
  const { notes, loading, error, removeNote } = useNotes();

  return (
    <div className="min-h-screen px-16 py-6">
      <Header />
      <PageHeading count={notes.length} />

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center">
          <span className="loading loading-ring size-24"></span>
        </div>
      )}
      {error && <p className="text-(--danger)">{error}</p>}
      {!loading && !error && <NotesGrid notes={notes} onDelete={removeNote} />}
    </div>
  );
}
