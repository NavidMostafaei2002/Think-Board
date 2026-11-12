import axios from "axios";
import type { Note, NoteInput } from "../types/note";

// Base URL
// const api = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}/api`,
// });
const api = axios.create({
  baseURL: import.meta.env.DEV ? "/api" : `${import.meta.env.VITE_API_URL}/api`,
});

// Get notes
export async function getNotes(): Promise<Note[]> {
  const { data } = await api.get("/notes");
  return data.response;
}

// Get one note
export async function getNote(id: string): Promise<Note> {
  const { data } = await api.get(`/notes/${id}`);
  return data.response;
}

// Add note
export async function createNote(note: NoteInput): Promise<Note> {
  const { data } = await api.post("/notes", note);
  return data.response;
}

// Update note
export async function updateNote(id: string, note: NoteInput): Promise<Note> {
  const { data } = await api.put(`/notes/${id}`, note);
  return data.response;
}

// Delete note
export async function deleteNote(id: string) {
  await api.delete(`/notes/${id}`);
}
