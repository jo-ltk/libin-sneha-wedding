export function HorizonMark({
  className = "",
  strokeWidth = 1.15,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 72 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 22C18 8 54 8 66 22"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M6 22C18 34 54 34 66 22"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <circle cx="36" cy="22" r="2.1" fill="currentColor" />
    </svg>
  );
}
