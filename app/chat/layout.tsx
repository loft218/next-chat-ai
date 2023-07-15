import "../chat.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="container">{children}</main>;
}
