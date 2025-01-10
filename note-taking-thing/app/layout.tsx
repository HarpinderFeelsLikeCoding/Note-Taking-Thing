import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "note taking thingy",
  description: "A free way to take notes, because why would I pay for that?",
  icons: {
    icon: [
      {
        media: "(prefers-colors-scheme: light)",
        url: '/note-taking-thing/public/notebook light logo.svg',
        href: '/note-taking-thing/public/notebook light logo.svg',
      },
      {
        media: "(prefers-colors-scheme: dark)",
        url: 'note-taking-thing/public/notebook dark logo.svg',
        href: '/note-taking-thing/public/notebook dark logo.svg',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute = 'class'
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="note-taking-thingy-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
