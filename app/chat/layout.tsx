export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="max-w-2xl my-0 mx-auto py-16 px-8">{children}</main>;
}
