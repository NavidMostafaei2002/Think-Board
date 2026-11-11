export interface DeleteModalProps {
  open: boolean;
  noteTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
}
