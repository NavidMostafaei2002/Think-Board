export interface SearchModalProps {
    initialQuery: string;
    onCancel: () => void;
    onSearch: (query: string) => void;
}