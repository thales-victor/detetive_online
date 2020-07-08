export default function GerarNumeroAleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * max + min);
}