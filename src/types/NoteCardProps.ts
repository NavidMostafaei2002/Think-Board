export interface NoteCardProps {
  id: string;
  title: string;
  content: string;
  date: string;
  onDelete: (id: string) => void;
}
