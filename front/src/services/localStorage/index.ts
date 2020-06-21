export interface Autentication {
  name: string;
  character: {
    id: number;
    name: string;
  }
}

const storageName = "detetive.online";

export const saveToken = (data: Autentication): void => {
  localStorage.setItem(
    storageName,
    JSON.stringify(data)
  );
}

export const getToken = (): Autentication | null => {
  let token = localStorage.getItem(storageName);
  return token ? JSON.parse(token)
               : null;
}

export const removeToken = (): void => {
  localStorage.removeItem(storageName);
}