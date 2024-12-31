import { getSite } from '@/sanity/lib/queries'
import Wrapper from './Wrapper'
import Link from 'next/link'
import Img from '@/ui/Img'
import NavigationNew from './NavigationNew'
import { cn } from '@/lib/utils'
import css from './Header.module.css'
import RTSocialButtons from './RTSocialButtons'
import Toggle from './Toggle'
import AuthButton from '@/components/AuthButton'

export default async function Header() {
	const { title, logo } = await getSite()
	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Wrapper className="frosted-glass sticky top-0 z-10 border-b border-ink/10 bg-canvas max-md:header-open:shadow-lg">
			<div
				className={cn(
					css.header,
					'mx-auto grid max-w-screen-xl items-center gap-x-6 p-4',
				)}
			>
				<div className="[grid-area:logo]">
					<Link
						className={cn(
							'h4 md:h3 inline-block',
							logo?.image && 'max-w-[250px]',
						)}
						href="/"
					>
						{logoImage ? (
							<Img
								className="inline-block max-h-[1.2em] w-auto"
								image={logoImage}
								alt={logo?.name || title}
							/>
						) : (
							<span className="text-logo">{title}</span>
						)}
					</Link>
				</div>

				<NavigationNew />
				<div className="flex items-center gap-4">
					<RTSocialButtons />
					<Toggle />
					<div suppressHydrationWarning>
						<AuthButton />
					</div>
				</div>
			</div>
		</Wrapper>
	)
}
