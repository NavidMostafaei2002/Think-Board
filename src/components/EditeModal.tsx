import { useState } from "react";
import type { EditModalProps } from "../types/EditeModalProps";

export default function EditModal({
  initialTitle,
  initialContent,
  onCancel,
  onSave,
}: EditModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const canSave = title.trim() !== "";
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSave) onSave({ title: title.trim(), content });
  };

  return (
    <div className="modal modal-open" role="dialog">
      <form className="modal-box rounded-2xl" onSubmit={handleSubmit}>
        <h3 className="text-xl font-bold">Edit note</h3>

        <label htmlFor="edit-title" className="mt-4 block text-sm font-medium">
          Title
        </label>
        <input
          id="edit-title"
          className="input mt-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label
          htmlFor="edit-content"
          className="mt-4 block text-sm font-medium"
        >
          Description
        </label>
        <textarea
          id="edit-content"
          className="textarea mt-2 h-40 w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {!canSave && (
          <p className="mt-2 text-sm text-(--danger)">Title is required.</p>
        )}

        <div className="modal-action">
          <button type="button" className="btn border-0" onClick={onCancel}>
            Cancel
          </button>
          <button
            type="submit"
            className="btn border-0 bg-(--primary)! text-white"
            disabled={!canSave}
          >
            Save changes
          </button>
        </div>
      </form>
      <div className="modal-backdrop" onClick={onCancel}></div>
    </div>
  );
}
