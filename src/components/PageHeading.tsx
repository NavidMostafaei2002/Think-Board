// import React from 'react'
import type { PageHeadingProps } from "../types/PageHeadingProps";
export default function PageHeading({ count }: PageHeadingProps) {
  return (
    <div className="my-5 flex flex-col gap-2">
      <h2 className="text-5xl font-medium">Your notes</h2>
      <p className="text-(--text-muted)">
        {count} {count === 1 ? "note" : "notes"}, newest first
      </p>
    </div>
  );
}
