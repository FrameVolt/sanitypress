import { getSite } from '@/sanity/lib/queries'
import Navigation from './Navigation'
import Social from '@/ui/Social'
import { PortableText } from 'next-sanity'
import Link from 'next/link'
import Img from '@/ui/Img'

export default async function Footer() {
	const { title, logo, copyright } = await getSite()

	const logoImage = logo?.image?.light || logo?.image?.default

	return (
		<footer className="bg-accent text-center text-canvas">
			{/* <div className="section flex flex-wrap justify-between gap-x-12 gap-y-8 max-sm:flex-col">
				<div className="flex flex-col gap-3 self-start max-sm:mx-auto max-sm:items-center">
					<Link className="h3 md:h2 max-w-max" href="/">
						<span className="text-logo">{title}</span>
					</Link>
				</div>
			</div> */}

			{copyright && (
				<div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-canvas/20 p-4 text-sm">
					<Link className="flex h-full items-center justify-center" href="/">
						<span className="text-logo text-sm">{title}</span>
					</Link>
					<PortableText value={copyright} />
				</div>
			)}
		</footer>
	)
}
