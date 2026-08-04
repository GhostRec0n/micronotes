import { useState, useEffect } from "react";
 
function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  // Fetch all notes on page load
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("/api/notes");
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      }
    };

    fetchNotes();
  }, []);

  // Send a POST request with { title, content }, then update the list
  const handleAddNote = async () => {
    if (!title.trim() || !content.trim()) return;

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const newNote = await response.json();
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };
 
  return (
    <div>
      <h1>MicroNotes</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
      <button onClick={handleAddNote}>Add Note</button>
 
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}: {note.content}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;
