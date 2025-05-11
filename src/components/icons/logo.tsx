
import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50"
      width="150"
      height="37.5"
      aria-label="OpenSource Hub Logo"
      {...props}
    >
      <rect width="200" height="50" fill="transparent" />
      <text
        x="10"
        y="35"
        fontFamily="var(--font-geist-sans), Arial, sans-serif"
        fontSize="28"
        fontWeight="bold"
        fill="currentColor"
        className="text-primary dark:text-primary"
      >
        OpenSource
        <tspan fill="currentColor" className="text-accent dark:text-accent"> Hub</tspan>
      </text>
    </svg>
  );
}
