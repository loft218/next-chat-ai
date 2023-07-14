import cuid from "cuid";

export type RandomStringOptions = "digits" | "letters" | "digits+letters";

export function generateRandomString(
  length: number,
  options: RandomStringOptions
): string {
  let characters = "";
  if (options.includes("digits")) {
    characters += "0123456789";
  }
  if (options.includes("letters")) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

export { cuid };
