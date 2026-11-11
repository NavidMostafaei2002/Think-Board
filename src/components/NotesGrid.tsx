import NoteCard from "./NoteCard";
import type { NotesGridProps } from "../types/NotesGridProps";

export default function NotesGrid({ notes, onDelete }: NotesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 justify-items-center">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          date={new Date(note.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
