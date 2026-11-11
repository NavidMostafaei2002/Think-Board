import type { NoteCardProps } from "../types/NoteCardProps";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const NoteCard = ({ id, title, content, date, onDelete }: NoteCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {
    setShowModal(false);
    onDelete(id);
  };
  return (
    <div className="group flex w-full h-50 flex-col gap-2 rounded-2xl bg-(--note-bg) p-6 transition-shadow duration-500 ease-in-out hover:shadow-lg">
      <h3 className="text-base font-bold">{title}</h3>
      <p className="text-sm leading-6 text-(--text-muted)">{content}</p>

      <div className="mt-auto flex items-center justify-between">
        <span className="self-end text-xs text-(--text-muted)">{date}</span>
        <div className="flex gap-1.5 transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
          <button className="min-h-11 cursor-pointer rounded-lg bg-white/75 px-3 text-sm font-medium">
            Edit
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="min-h-11 cursor-pointer rounded-lg bg-white/75 px-3 text-sm font-medium text-(--danger)"
          >
            Delete
          </button>
        </div>
      </div>

      <DeleteModal
        open={showModal}
        noteTitle={title}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default NoteCard;
