// LOHA brand marks from the "LOHA — three marks" design sheet (Claude Design).
// Palette: navy #172552, amber #F59E0B. Mark "a" (stacked blocks + amber drop,
// reads as both L and Amharic ለ) is the primary.

type Mark = "a" | "b" | "c";
type Variant = "full" | "mono" | "reverse";

const NAVY = "#172552";
const AMBER = "#F59E0B";
const WHITE = "#FFFFFF";

function markA(primary: string, accent: string) {
  return (
    <>
      <rect x="11" y="11" width="46" height="46" rx="2" fill={primary} />
      <rect x="11" y="63" width="46" height="46" rx="2" fill={primary} />
      <path
        d="M63,63 L86,63 A23,23 0 0 1 109,86 A23,23 0 0 1 86,109 A23,23 0 0 1 63,86 Z"
        fill={accent}
      />
    </>
  );
}

function markB(bg: string, fg: string, accent: string) {
  return (
    <>
      <rect x="6" y="6" width="108" height="108" rx="26" fill={bg} />
      <path d="M34,26 H54 V72 H86 V92 H34 Z" fill={fg} />
      <path
        d="M62,60 V47 A13,13 0 0 1 75,34 A13,13 0 0 1 88,47 A13,13 0 0 1 75,60 Z"
        fill={accent}
      />
    </>
  );
}

function markC(primary: string, accent: string) {
  return (
    <>
      <path d="M12,12 H34 L46,24 V74 H70 V108 H12 Z" fill={primary} />
      <path d="M76,74 H108 V91 A17,17 0 0 1 91,108 H76 Z" fill={accent} />
    </>
  );
}

export default function Logo({
  mark = "a",
  variant = "full",
  size = 36,
  className,
}: {
  mark?: Mark;
  variant?: Variant;
  size?: number;
  className?: string;
}) {
  let shapes: React.ReactNode;
  if (mark === "b") {
    shapes =
      variant === "reverse"
        ? markB(WHITE, NAVY, NAVY)
        : variant === "mono"
          ? markB(NAVY, WHITE, WHITE)
          : markB(NAVY, WHITE, AMBER);
  } else if (mark === "a") {
    // reverse keeps the amber drop — it stays legible on navy and the
    // accent is the mark's signature.
    shapes =
      variant === "reverse"
        ? markA(WHITE, AMBER)
        : variant === "mono"
          ? markA(NAVY, NAVY)
          : markA(NAVY, AMBER);
  } else {
    shapes =
      variant === "reverse"
        ? markC(WHITE, WHITE)
        : variant === "mono"
          ? markC(NAVY, NAVY)
          : markC(NAVY, AMBER);
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {shapes}
    </svg>
  );
}
