import { clsx } from "clsx";

type LogoMarkProps = {
  reversed?: boolean;
};

export function LogoMark({ reversed = false }: LogoMarkProps) {
  return (
    <svg
      width="240"
      height="56"
      viewBox="0 0 240 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Basecamp Brewing Co."
      className="h-11 w-auto sm:h-12"
    >
      <path d="M18 38L36 16L48 27L61 11L82 38H18Z" fill={reversed ? "#FFF8E7" : "#2D5016"} />
      <path d="M56 16C53 19 50 23 50 28C50 33 53 37 58 39C63 37 66 33 66 28C66 23 63 19 60 16L58 19L56 16Z" fill={reversed ? "#1A1A1A" : "#FFF8E7"} />
      <path d="M54 27H62" stroke={reversed ? "#FFF8E7" : "#2D5016"} strokeWidth="2" strokeLinecap="round" />
      <path d="M55 31H61" stroke={reversed ? "#FFF8E7" : "#2D5016"} strokeWidth="2" strokeLinecap="round" />
      <text
        x="94"
        y="25"
        fill={reversed ? "#FFF8E7" : "#1A1A1A"}
        fontFamily="var(--font-oswald), sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="0.04em"
        className={clsx("uppercase")}
      >
        BASECAMP
      </text>
      <text
        x="94"
        y="46"
        fill="#B87333"
        fontFamily="var(--font-source-serif), serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="0.18em"
      >
        BREWING CO.
      </text>
    </svg>
  );
}
