import { useEffect, useState } from "react";
import { deleteNote, getNotes } from "../api/notes";
import type { Note } from "../types/note";

export function useNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getNotes()
      .then(setNotes)
      .catch(() => setError("Failed to load notes"))
      .finally(() => setLoading(false));
  }, []);

  const removeNote = async (id: string) => {
    try {
      await deleteNote(id);
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch {
      alert("Faild to delete note");
    }
  };

  return { notes, loading, error, removeNote };
}
