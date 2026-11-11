import type { DeleteModalProps } from "../types/DeleteModalProps";

export default function DeleteModal({
  open,
  noteTitle,
  onCancel,
  onConfirm,
}: DeleteModalProps) {
  return (
    <div className={`modal ${open ? "modal-open" : ""}`} role="dialog">
      <div className="modal-box rounded-2xl">
        <h3 className="text-xl font-bold">Delete this note?</h3>
        <p className="py-4 text-(--text-muted)">
          “{noteTitle}” will be permanently deleted. This action can’t be undone.
        </p>
        <div className="modal-action">
          <button className="btn" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="btn border-0 bg-(--danger)! text-white"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onCancel}></div>
    </div>
  );
}