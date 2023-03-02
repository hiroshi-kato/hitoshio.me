import './globals.css';

export const metadata = {
  title: 'hitoshio.me',
  description: 'hitoshioのホームページ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
