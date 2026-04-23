/**
 * Inline “Buy me a coffee” CTA — replaces external purple_img.png (no third-party image request).
 * Use inside an <a> that sets aria-label for accessibility.
 */
export default function BuyMeACoffeeBadge({ variant = 'wide', className = '' }) {
  const rootClass = ['bmc-badge', variant === 'sidebar' ? 'bmc-badge--sidebar' : 'bmc-badge--wide', className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={rootClass} aria-hidden="true">
      <svg
        className="bmc-badge__cup"
        viewBox="0 0 52 56"
        width="52"
        height="56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 26c5 0 9 3.5 9 9s-4 9-9 9h-5"
          stroke="#f4f4f5"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="6" y="12" width="34" height="10" rx="3" fill="#3f3f46" />
        <rect x="8" y="8" width="30" height="8" rx="2" fill="#27272a" />
        <rect x="7" y="20" width="32" height="30" rx="7" fill="#eab308" />
        <rect x="7" y="28" width="32" height="11" fill="#fafafa" />
      </svg>
      <span className="bmc-badge__label">Buy me a coffee</span>
    </span>
  )
}
