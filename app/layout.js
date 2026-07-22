import './globals.css'

export const metadata = {
  title: 'YugeSpace — Data Scientist & Bot Automation Developer',
  description: 'Data Scientist & Telegram Bot Automation Developer based in Lampung, Sumatra, Indonesia',
  keywords: ['Data Scientist', 'Bot Automation Developer', 'Telegram Bot', 'Python', 'Next.js', 'Lampung', 'Indonesia'],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'YugeSpace — Data Scientist & Bot Automation Developer',
    description: 'Data Scientist & Telegram Bot Automation Developer based in Lampung, Sumatra, Indonesia',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary',
    title: 'YugeSpace — Data Scientist & Bot Automation Developer',
    description: 'Data Scientist & Telegram Bot Automation Developer based in Lampung, Sumatra, Indonesia',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%23F62477'/><text x='50' y='68' font-family='monospace' font-weight='900' font-size='58' fill='white' text-anchor='middle'>Y</text></svg>" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();
          `
        }} />
      </head>
      <body>
        <div className="fixed inset-0 pointer-events-none bg-grid" />
        {children}
      </body>
    </html>
  )
}
