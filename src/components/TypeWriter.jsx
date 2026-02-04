import { useEffect, useState } from "react";

const TypeWriter = () => {
  const texts = ["Full Stack Developer | Web Developer"];

  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseAfterTyping = 1200;

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterTyping);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div style={{ height:'50px', fontSize: "25px", fontWeight: "bold", color: "rgb(32, 140, 252)" }}>
      <h3>{displayText}</h3>
    </div>
  );
};

export default TypeWriter;
