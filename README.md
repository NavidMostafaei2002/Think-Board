# Think Board

A responsive note-taking app built with React and TypeScript. Users can create, view, edit, delete, and search notes, all connected to a REST API.

## Features

- View all notes in a responsive grid (1 column on mobile, 2 on tablet, 3 on desktop)
- Create a new note with a title and description
- Edit an existing note
- Delete a note with a confirmation dialog
- Search notes by title or description
- Loading and error states
- Mobile-friendly layout with a floating "+" button

## Tech Stack

- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/)
- [Axios](https://axios-http.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/NavidMostafaei2002/Think-Board.git
cd Think-Board
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_API_URL=https://thinkboard.codewithmmd.ir
```

### Run the App

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

To open the app on your phone, run `npm run dev -- --host` and use the Network address on the same Wi-Fi.

## Project Structure

```
src/
├── api/          # API requests (Axios)
├── assets/       # Fonts
├── components/   # UI components (Header, NoteCard, NotesGrid, modals, ...)
├── hooks/        # Custom hooks (useNotes)
├── styles/       # Global styles
├── types/        # TypeScript types
├── App.tsx
└── main.tsx
```

## API

The app uses the Think Board REST API:

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/notes`     | Get all notes     |
| GET    | `/api/notes/:id` | Get a single note |
| POST   | `/api/notes`     | Create a note     |
| PUT    | `/api/notes/:id` | Update a note     |
| DELETE | `/api/notes/:id` | Delete a note     |

A note has the following shape:

```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

## Screenshots

![Desktop view](screenshots/desktop.png)
![Mobile view](screenshots/mobile.png)
![Darkmode view](screenshots/darkmode.png)

## What I Learned

- Building reusable components and passing data with props
- Managing state with `useState` and fetching data with `useEffect`
- Extracting logic into a custom hook
- Connecting a frontend to a REST API with Axios
- Building a responsive UI with Tailwind CSS

## Author

[Navid Mostafaei](https://github.com/NavidMostafaei2002)
