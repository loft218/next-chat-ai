export default function Logo({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  width = width || "100px";
  height = height || "100px";
  return (
    <svg
      width={width}
      height={height}
      viewBox="-4.8 -4.8 57.60 57.60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="white" fillOpacity="0"></rect>
      <rect
        x="9"
        y="18"
        width="30"
        height="24"
        rx="2"
        fill="#2F88FF"
        stroke="#000000"
        strokeWidth="4"
      ></rect>
      <circle cx="17" cy="26" r="2" fill="white"></circle>
      <circle cx="31" cy="26" r="2" fill="white"></circle>
      <path
        d="M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z"
        fill="white"
      ></path>
      <path
        d="M24 10V18"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M4 26V34"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M44 26V34"
        stroke="#000000"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <circle cx="24" cy="8" r="2" stroke="#000000" strokeWidth="4"></circle>
    </svg>
  );
}
