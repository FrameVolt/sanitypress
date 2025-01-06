import { NuqsAdapter } from 'nuqs/adapters/next/app'
import SkipToContent from '@/ui/SkipToContent'
import Announcement from '@/ui/Announcement'
import Header from '@/ui/header'
import Footer from '@/ui/footer'
import VisualEditingControls from '@/ui/VisualEditingControls'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/app.css'
import { Inter } from 'next/font/google'

import createEmotionCache from '@/ui/components/createEmotionCache'

const inter = Inter({ subsets: ['latin'] })
const clientSideEmotionCache = createEmotionCache()

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${inter.className}`}>
			{/* <GoogleTagManager gtmId='' /> */}

			<body className="bg-canvas text-ink">
				<NuqsAdapter>
					<SkipToContent />
					<Announcement />

					<Header />

					<main id="main-content" tabIndex={-1}>
						{children}
					</main>
					<Footer />

					<VisualEditingControls />
				</NuqsAdapter>

				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
