export const bgColors = [
  'bg-yellow-100 text-yellow-800',
  'bg-green-100 text-green-800',
  'bg-blue-100 text-blue-800',
  'bg-pink-100 text-pink-800',
  'bg-purple-100 text-purple-800',
  'bg-amber-100 text-amber-800',
  'bg-rose-100 text-rose-800',
  'bg-indigo-100 text-indigo-800'
];
export function getRandomColor() {
  return bgColors[Math.floor(Math.random() * bgColors.length)];
}