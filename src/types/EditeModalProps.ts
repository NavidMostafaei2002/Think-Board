import type { NoteInput } from "./note";

export interface EditModalProps {
  heading?: string;
  submitLabel?: string;
  initialTitle: string;
  initialContent: string;
  onCancel: () => void;
  onSave: (note: NoteInput) => void;
}
