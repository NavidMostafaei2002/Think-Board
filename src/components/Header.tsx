// import React from "react";

export default function Header() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-3xl">Think Board</a>
        </div>
        <div className="navbar-end gap-4">
          <button className="text-(--text) cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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
          <a className="btn px-5! py-5! rounded-(--rounded-primary) bg-(--primary) text-(--bg) hover:bg-(--primary-hover) hidden lg:flex">
            + New note
          </a>
        </div>
      </div>
    </>
  );
}
