
import type { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50" // Adjusted viewBox for potentially longer text
      width="200" // Adjusted width for potentially longer text
      height="37.5"
      aria-label="Simon Styles Open Hub Logo"
      {...props}
    >
      <rect width="200" height="50" fill="transparent" />
      <text
        x="10"
        y="35"
        fontFamily="var(--font-geist-sans), Arial, sans-serif"
        fontSize="24" // Slightly reduced font size if needed for longer name
        fontWeight="bold"
        fill="currentColor"
        className="text-primary dark:text-primary"
      >
        Simon Styles
        <tspan fill="currentColor" className="text-accent dark:text-accent"> Open Hub</tspan>
      </text>
    </svg>
  );
}
