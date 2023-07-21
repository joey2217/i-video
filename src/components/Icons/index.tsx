import type { SVGProps } from 'react'

export function Spinner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect width="7.33" height="7.33" x="1" y="1" fill="currentColor">
        <animate
          id="svgSpinnersBlocksWave0"
          attributeName="x"
          begin="0;svgSpinnersBlocksWave1.end+0.2s"
          dur="0.6s"
          values="1;4;1"
        ></animate>
        <animate
          attributeName="y"
          begin="0;svgSpinnersBlocksWave1.end+0.2s"
          dur="0.6s"
          values="1;4;1"
        ></animate>
        <animate
          attributeName="width"
          begin="0;svgSpinnersBlocksWave1.end+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="0;svgSpinnersBlocksWave1.end+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="8.33" y="1" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="1;4;1"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="1" y="8.33" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="1;4;1"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.1s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="15.66" y="1" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="1;4;1"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="8.33" y="8.33" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="1" y="15.66" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="1;4;1"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.2s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="15.66" y="8.33" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="8.33" y="15.66" fill="currentColor">
        <animate
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="8.33;11.33;8.33"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.3s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
      <rect width="7.33" height="7.33" x="15.66" y="15.66" fill="currentColor">
        <animate
          id="svgSpinnersBlocksWave1"
          attributeName="x"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="y"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="15.66;18.66;15.66"
        ></animate>
        <animate
          attributeName="width"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
        <animate
          attributeName="height"
          begin="svgSpinnersBlocksWave0.begin+0.4s"
          dur="0.6s"
          values="7.33;1.33;7.33"
        ></animate>
      </rect>
    </svg>
  )
}

export function ChevronLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        d="M31.884 8.366a1.25 1.25 0 0 1 0 1.768L18.018 24l13.866 13.866a1.25 1.25 0 0 1-1.768 1.768l-14.75-14.75a1.25 1.25 0 0 1 0-1.768l14.75-14.75a1.25 1.25 0 0 1 1.768 0Z"
      ></path>
    </svg>
  )
}

export function ChevronRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.116 39.634a1.25 1.25 0 0 1 0-1.768L29.982 24L16.116 10.134a1.25 1.25 0 0 1 1.768-1.768l14.75 14.75a1.25 1.25 0 0 1 0 1.768l-14.75 14.75a1.25 1.25 0 0 1-1.768 0Z"
      ></path>
    </svg>
  )
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14a13.94 13.94 0 0 0 8.976-3.256l10.89 10.89a1.25 1.25 0 0 0 1.768-1.768l-10.89-10.89A13.944 13.944 0 0 0 34 20c0-7.732-6.268-14-14-14ZM8.5 20c0-6.351 5.149-11.5 11.5-11.5S31.5 13.649 31.5 20S26.351 31.5 20 31.5S8.5 26.351 8.5 20Z"
      ></path>
    </svg>
  )
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.262 10.178a10.771 10.771 0 0 0-12.574-.296c-5.65 3.865-6.308 11.953-1.357 16.68l15.806 15.092a1.25 1.25 0 0 0 1.726 0l15.803-15.09c4.952-4.729 4.293-12.816-1.358-16.682a10.772 10.772 0 0 0-12.577.299L24 12.246l-2.738-2.068Z"
      ></path>
    </svg>
  )
}

export function FluentDelete(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0Zm-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5H17.5Zm-3.841 26.147a4.75 4.75 0 0 0 4.733 4.353h11.216a4.75 4.75 0 0 0 4.734-4.353L36.324 13.5H11.676l1.983 23.647ZM21.5 20.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0v-14.5ZM27.75 19c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25Z"
      ></path>
    </svg>
  )
}
