import "./notfound.css"

export default function NotFound() {
  const notFoundPrompt = [
    "The door wont open.",
    "Only echoes remains here.",
    "The file is not here.",
    "The map ends here.",
    "The path is blocked.",
    "Your instincts telling you to leave.",
    "No one has been here before.",
    "This sector has no records.",
    "Where’s everyone going? Bingo?"
  ]
  return (
    <>
      <h1 id="notfound-title">404</h1>
      <p id="notfound-caption">{notFoundPrompt[Math.floor(Math.random() * notFoundPrompt.length)]}</p>
    </>
  );
}