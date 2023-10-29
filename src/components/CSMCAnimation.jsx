import { useEffect, useState } from "react";
import style from "./CSMCAnimation.module.css";

// function lerp(a, b, t) {
//   return a + (b - a) * t;
// }

export default function CSMCAnimation() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const otherLetters = [
    ["o", "m", "p", "u", "t", "e", "r", " "],
    ["c", "i", "e", "n", "c", "e", " ", " "],
    ["a", "j", "o", "r", "s", " ", " ", " "],
    ["o", "m", "m", "i", "t", "t", "e", "e"],
  ];
  const lines = 4;
  const wordLength = otherLetters[0].length + 1;
  const otherLettersView = otherLetters.flatMap((letters, y) =>
    letters.map((letter, x) => (
      <g
        key={`${x}-${y}`}
        className={style.otherLetter}
        style={{
          "--letter-x": x,
          "--letter-y": y,
          "--word-length": wordLength,
          "--lines": lines,
        }}
      >
        <text className={style.text}>{letter}</text>
      </g>
    ))
  );

  return (
    <svg
      viewBox="0 0 100 100"
      className={
        animationStarted ? style.svgAnimationAfter : style.svgAnimationBefore
      }
      onClick={() => setAnimationStarted((w) => !w)}
    >
      {/* NOTE: percentages in CSS transform:translate don't work right on <text className={style.text}> in Safari, so we wrap it in a <g> and animate that (https://stackoverflow.com/a/61398694) */}
      <g className={style.csmcTransition} style={{ "--frac": 0 / 3 }}>
        <text className={style.text}>C</text>
      </g>
      <g className={style.csmcTransition} style={{ "--frac": 1 / 3 }}>
        <text className={style.text}>S</text>
      </g>
      <g className={style.csmcTransition} style={{ "--frac": 2 / 3 }}>
        <text className={style.text}>M</text>
      </g>
      <g className={style.csmcTransition} style={{ "--frac": 3 / 3 }}>
        <text className={style.text}>C</text>
      </g>
      {otherLettersView}
    </svg>
  );
}
