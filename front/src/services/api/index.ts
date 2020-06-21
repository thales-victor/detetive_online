import { saveToken } from "../localStorage";


export const startNewGame = (name: string): string => {
  saveToken(fake(name));
  return "123456";
}


const fake = (name: string) => {
  return {
    name: name,
    character: {
      id: 1,
      name: "Srta. Scarlet"
    }
  };
}