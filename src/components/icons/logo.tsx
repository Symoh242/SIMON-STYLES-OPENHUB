
import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50"
      height="50"
      aria-label="Hub Logo"
      {...props}
    >
      <rect width="50" height="50" rx="8" fill="hsl(var(--primary))" />
      <text
        x="50%"
        y="51%" // Adjusted for better visual centering
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="var(--font-geist-sans), Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
      >
        H
      </text>
    </svg>
  );
}
