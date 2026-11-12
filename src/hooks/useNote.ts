import axios from "axios";
import { useEffect, useState } from "react";
import { deleteNote, getNotes, updateNote, createNote } from "../api/notes";
import type { Note, NoteInput } from "../types/note";

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

  const addNote = async (note: NoteInput) => {
    try {
      await createNote(note);

      // دریافت مجدد تمام نوت‌ها از سرور
      const updatedNotes = await getNotes();

      // آپدیت کردن State
      setNotes(updatedNotes);

      return true;
    } catch (error: unknown) {
      let message = "Something went wrong";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.error?.content?.errors?.[0] || message;
      }

      alert(message);
      return false;
    }
  };

  const removeNote = async (id: string) => {
    try {
      await deleteNote(id);
      setNotes((prev) => prev.filter((note) => note.id !== id));
    } catch {
      alert("Failed to delete note");
    }
  };

  const editNote = async (id: string, note: NoteInput) => {
    try {
      await updateNote(id, note);
      setNotes((prev) =>
        prev.map((n) => (n.id === id ? { ...n, ...note } : n)),
      );
    } catch {
      alert("Failed to update note");
    }
  };

  return { notes, loading, error, removeNote, editNote, addNote };
}
