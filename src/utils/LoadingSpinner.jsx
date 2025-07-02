import { ClipLoader } from "react-spinners";

export default function LoadingSpinner({
  size = 48,
  color = "#22c55e",
  className = "",
}) {
  return (
    <div
      className={`flex items-center justify-center w-full h-full ${className}`}
    >
      <ClipLoader size={size} color={color} speedMultiplier={0.9} />
    </div>
  );
}
