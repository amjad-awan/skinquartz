const paths: Record<string, string> = {
  clock: "M12 6v6l4 2M12 3a9 9 0 100 18 9 9 0 000-18z",
  heart: "M12 20s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 10c0 5.5-7 10-7 10z",
  hourglass: "M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9",
  alert: "M12 4l9 16H3L12 4zM12 10v4M12 17v.5",
  calendar: "M5 6h14v14H5zM5 10h14M9 3v4M15 3v4",
  check: "M5 13l4 4L19 7",
  card: "M3 6h18v12H3zM3 10h18",
  phone: "M6 3h4l2 5-3 2a11 11 0 005 5l2-3 5 2v4a2 2 0 01-2 2A17 17 0 014 5a2 2 0 012-2z",
};
export default function Icon({ name, className = "w-9 h-9" }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-hidden>
      <path d={paths[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
