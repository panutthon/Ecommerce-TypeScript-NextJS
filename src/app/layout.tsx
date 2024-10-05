import type { Metadata } from "next"
import "./globals.css"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from "./theme/Theme"

export const metadata: Metadata = {
  title: {
    template: '%s | StoreKeeper',
    default: 'Home | StoreKeeper',
  },
  description: "Next Store - E-commerce website built with Next.js and Material-UI",
  keywords: ["Next.js", "Material-UI", "E-commerce", "StoreKeeper"],
  authors: [{name: "ITGenius Team",}],

  // Additional
  icons: "@/favicon.ico",

  // Robots
  robots: "index, follow",  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
