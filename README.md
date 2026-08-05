# MicroNotes

A very small full-stack notes app — type a note, click "Add Note", and it appears in the list below. Notes are stored on the server in memory while it's running (no database).

## Tech Stack
- Frontend: React (Vite)
- Backend: Node.js + Express

## Project Structure

micronotes/
├── client/ # React app
├── server/ # Express server
├── warmup.js # JS practice exercises (Part A)


## How to Run

**1. Start the backend**

cd server
node server.js

Server runs on `http://localhost:5000`

**2. Start the frontend** (in a new terminal)

cd client
npm run dev

Opens on `http://localhost:5173`

**3. Run the warmup exercises** (optional, from the root folder)

node warmup.js


## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes | Returns all notes |
| POST | /api/notes | Adds a new note |

