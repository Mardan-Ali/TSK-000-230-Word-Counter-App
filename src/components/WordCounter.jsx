import React, { useState } from "react";

const WordCounter = ({ text }) => {
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  // Function to update counts
  const updateCounts = () => {
    const words = text.split(/\s+/);
    setWordCount(words.length);

    const letters = text.replace(/[^a-zA-Z]/g, "");
    setLetterCount(letters.length);

    const sentences = text.split(/[.!?]+/).filter(Boolean);
    setSentenceCount(sentences.length);

    const paragraphs = text.split("\n").filter(Boolean);
    setParagraphCount(paragraphs.length);
  };

  return (
    <div>
      <button onClick={updateCounts}>Count</button>
      <div>Word Count: {wordCount}</div>
      <div>Letter Count: {letterCount}</div>
      <div>Sentence Count: {sentenceCount}</div>
      <div>Paragraph Count: {paragraphCount}</div>
    </div>
  );
};

export default WordCounter;
