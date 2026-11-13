import type { HeaderProps } from "../types/HeaderProps";

export default function Header({ onAdd, onSearch }: HeaderProps) {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost m-0 p-0! text-2xl md:px-4! md:text-2xl lg:text-3xl">
          Think Board
        </a>
      </div>
      <div className="navbar-end gap-4">
        <button
          onClick={onSearch}
          aria-label="Search notes"
          className="cursor-pointer text-(--text)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="size-6 stroke-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <button
          onClick={onAdd}
          className="btn hidden rounded-(--rounded-primary) bg-(--primary) px-5! py-5! text-(--bg) hover:bg-(--primary-hover) lg:flex"
        >
          + New note
        </button>

        <button
          onClick={onAdd}
          aria-label="New note"
          className="btn fixed right-5 bottom-6 z-40 flex size-14 items-center justify-center rounded-full border-0 bg-(--primary) p-0! text-3xl leading-none text-(--bg) shadow-lg hover:bg-(--primary-hover) lg:hidden"
        >
          +
        </button>
      </div>
    </div>
  );
}