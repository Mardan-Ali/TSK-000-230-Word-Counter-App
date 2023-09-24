import React, { useState } from "react";
import WordCounter from "./WordCounter";

const ResultComponent = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h2>Text Analyzer</h2>
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={handleInputChange}
        rows="6"
        cols="50"
      />
      <WordCounter text={text} />
    </div>
  );
};

export default ResultComponent;
