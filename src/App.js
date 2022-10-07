import { useState } from "react";
import "./styles.css";

const animalEmojiDictionary = {
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🐕": "Dog",
  "🦁": "Lion",
  "🦏": "Rhinoceros",
  "🐁": "Mouse",
  "🐇": "Rabbit",
  "🐘": "Elephant",
  "🐫": "Two-Hump Camel",
  "🐄": "Cow",
  "🐎": "Horse",
  "🦘": "Kangaroo",
  "🐧": "Penguin",
  "🐖": "Pig"
};

const animalEmoji = Object.keys(animalEmojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState(
    "Type a emoji or select from below list 👇"
  );
  function handleEmojiInput(event) {
    const emojiInput = event.target.value;
    let meaning;
    if (emojiInput) {
      meaning = animalEmojiDictionary[emojiInput];
      if (meaning === undefined) {
        meaning =
          "Entered emoji not found!! Try entering emoji from below list 👇";
      }
    } else {
      meaning = "Type a emoji or select from below list 👇";
    }
    setEmojiMeaning(meaning);
  }

  function handleEmojiClick(emoji) {
    const meaning = animalEmojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Animal Emoji-Store</h1>
      <input
        style={{ padding: "1rem", width: "300px", fontSize: "1.8rem" }}
        onChange={handleEmojiInput}
      />
      <h2> {emojiMeaning}</h2>
      <p>
        {animalEmoji.map((item) => {
          return (
            <span
              key={item}
              style={{ margin: "1rem", fontSize: "2rem", cursor: "pointer" }}
              onClick={() => handleEmojiClick(item)}
            >
              {item}
            </span>
          );
        })}
      </p>
    </div>
  );
}
