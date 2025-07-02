export function formatISK(amount) {
  if (typeof amount !== "number") return "";
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} kr.`;
}
