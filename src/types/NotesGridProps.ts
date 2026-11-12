import type { Note, NoteInput } from "./note";

export interface NotesGridProps {
  notes: Note[];
  onDelete: (id: string) => void;
  onEdit: (id: string, note: NoteInput) => Promise<void>;
}
