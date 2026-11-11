import type { Note } from "./note";

export interface NotesGridProps {
  notes: Note[];
  onDelete: (id: string) => void;
}
