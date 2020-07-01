export default function GerarNumeroAleatorio(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}