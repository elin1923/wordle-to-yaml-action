import { Game } from ".";
import { writeFile } from "fs/promises";
import { stringify } from "json-to-pretty-yaml";

export default async function returnWriteFile(fileName: string, games: Game[]) {
  try {
    const data = stringify(games);
    const promise = writeFile(fileName, data);
    await promise;
  } catch (error) {
    throw new Error(error);
  }
}
