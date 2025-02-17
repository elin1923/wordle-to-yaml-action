import { Score, Board } from "./index";

export default function parseGame(
  title: string,
  body: string
): {
  gameNumber: number;
  score: Score;
  won: boolean;
  board: Board;
  boardWords: Board;
} {
  try {
    const split = title.split(" ");
    if (!split || split.length !== 3) {
      throw new Error(
        "The GitHub Issue title is not in the correct format. Must be: `Wordle ### #/#`"
      );
    }
    const gameNumber = parseInt(split[1]);
    const score = split[2][0] === "X" ? "X" : parseInt(split[2][0]);
    const board = checkBoard(body);
    const boardWords = board.map(emojiToWord);
    return {
      gameNumber,
      score,
      won: score !== "X",
      board,
      boardWords,
    };
  } catch (error) {
    throw new Error(error);
  }
}

export function checkBoard(body: string): Board {
  const board = body
    .split("\n")
    .map((row) => row.replace(/\r/, "").trim())
    .filter(String)
    .filter((row) => !row.startsWith("Wordle"));
  if (!board.length || board.length < 1 || board.length > 6) {
    throw new Error(`Wordle board is invalid: ${JSON.stringify(board)}`);
  }
  return board as Board;
}

export function emojiToWord(row: string) {
  return row
    .replace(/🟩/g, "yes ")
    .replace(/🟦/g, "yes ")
    .replace(/⬛/g, "no ")
    .replace(/⬜/g, "no ")
    .replace(/🟨/g, "almost ")
    .replace(/🟧/g, "almost ")
    .trim();
}
