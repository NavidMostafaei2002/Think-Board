import type { NoteInput } from "./note";
export interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  date: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, note: NoteInput) => Promise<void>;
}
