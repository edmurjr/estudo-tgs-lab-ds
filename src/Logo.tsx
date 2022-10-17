import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#pattern0)" d="M0 0H80V80H0z" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_11_73" transform="scale(.0125)" />
        </pattern>
        <image
          id="image0_11_73"
          width={80}
          height={80}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABhQTFRFAAAAgdj3gdj3gdj3gdj3gdj3gdj3gdj3Gr3pxgAAAAh0Uk5TAAQG6f9w/P7YzS8KAAAAb0lEQVR4nGNgGHqAEcZgwpQzcYEAVxCHxQUGMNSpwaUCgAbCOS4OuAyESMENYsFQ6DKqcFThqMJRhSNLYckQcOOowlGFA6jQBRk4EKvQBbdCNGtHFY4ohSFwhQEo2lABUIoVxkZrDKMAB+wWDVUAACxzBm1F+UWCAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  )
}
