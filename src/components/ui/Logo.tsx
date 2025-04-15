export default function Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FF3BFF' }} />
          <stop offset="100%" style={{ stopColor: '#5C24FF' }} />
        </linearGradient>
      </defs>
      {/* Stylized "E" shape with ascending steps */}
      <path
        d="M8 6h16M8 16h14M8 26h16M8 6v20"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Upward arrow representing elevation */}
      <path
        d="M24 20l4-4l-4-4"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
