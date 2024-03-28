import type { Metadata } from "next"
import CssBaseline from '@mui/material/CssBaseline'

export const metadata: Metadata = {
  title: "カレンダーのプロトタイプ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
