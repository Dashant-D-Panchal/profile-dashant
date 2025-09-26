import React, { useState, useEffect } from "react";

function TypingEffect({ texts, speed = 100, pause = 1000 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    let timer;
    if (!isDeleting && charIndex < current.length) {
      timer = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayed(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (!isDeleting && charIndex === current.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((index + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, texts, index, speed, pause]);

  return <span>{displayed}</span>;
}

export default TypingEffect;
