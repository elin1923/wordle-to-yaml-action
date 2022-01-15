import { parseGame } from "../index";

describe("parseGame", () => {
  test("works", () => {
    expect(
      parseGame(
        "Wordle 210 3/6",
        `🟩⬛⬛⬛⬛
⬛⬛🟨🟩🟨
🟩🟩🟩🟩🟩`
      )
    ).toEqual({
      board: ["🟩⬛⬛⬛⬛", "⬛⬛🟨🟩🟨", "🟩🟩🟩🟩🟩"],
      gameNumber: 210,
      score: 3,
      won: true,
    });
    expect(
      parseGame(
        "Wordle 208 X/6",
        `⬛⬛⬛⬛🟨
⬛🟨⬛⬛⬛
⬛🟨⬛🟩⬛
🟩⬛⬛⬛🟨
🟩⬛⬛🟩⬛
🟩⬛⬛🟩⬛`
      )
    ).toEqual({
      board: [
        "⬛⬛⬛⬛🟨",
        "⬛🟨⬛⬛⬛",
        "⬛🟨⬛🟩⬛",
        "🟩⬛⬛⬛🟨",
        "🟩⬛⬛🟩⬛",
        "🟩⬛⬛🟩⬛",
      ],
      gameNumber: 208,
      score: "X",
      won: false,
    });
    expect(
      parseGame(
        "Wordle 209 6/6",
        `Wordle 209 6/6

🟩⬛🟨⬛🟨
🟩🟩⬛⬛⬛
🟩🟩⬛⬛⬛
🟩⬛🟩⬛⬛
🟩🟩🟩⬛⬛
🟩🟩🟩🟩🟩
`
      )
    ).toEqual({
      board: [
        "🟩⬛🟨⬛🟨",
        "🟩🟩⬛⬛⬛",
        "🟩🟩⬛⬛⬛",
        "🟩⬛🟩⬛⬛",
        "🟩🟩🟩⬛⬛",
        "🟩🟩🟩🟩🟩",
      ],
      gameNumber: 209,
      score: 6,
      won: true,
    });
  });
});
