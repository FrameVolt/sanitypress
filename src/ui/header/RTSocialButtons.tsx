'use client'
export default function Toggle() {
	return (
		<div>
			<button
				type="button"
				onClick={() => {
					window.open('https://assetstore.unity.com/publishers/50211', '_blank')
				}}
				className="mb-2 mr-2 inline-flex items-center rounded-full bg-[#ffffff] px-5 py-2.5 text-center text-sm font-medium text-black dark:hover:bg-[#050708]/30"
			>
				<svg
					className="-ml-1 mr-2 h-4 w-4 hover:text-white"
					aria-hidden="true"
					focusable="false"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 128 128"
				>
					<path
						fill="currentColor"
						d="M59.049 0 7.339 29.855V89.56l19.825-11.45V54.714c.009-.402.225-.771.573-.967a1.13 1.13 0 0 1 1.129-.008l24.087 13.9a2.275 2.275 0 0 1 1.133 1.97v27.8a1.156 1.156 0 0 1-.565.98 1.131 1.131 0 0 1-1.124.012l-20.27-11.718-19.832 11.46L63.991 128l51.702-29.856-19.817-11.46-20.261 11.703a1.151 1.151 0 0 1-1.124-.008 1.145 1.145 0 0 1-.568-.976V69.608c0-.82.424-1.56 1.133-1.968L99.13 53.737a1.119 1.119 0 0 1 1.124.008c.352.196.572.565.575.967v23.396l19.83 11.454V29.855h-.009L68.96 0v22.9l20.26 11.696c.347.204.555.577.555.984 0 .403-.212.773-.555.976L65.137 50.468a2.302 2.302 0 0 1-2.27 0L38.791 36.556a1.122 1.122 0 0 1-.56-.976 1.127 1.127 0 0 1 .56-.984L59.048 22.9zm0 0"
					></path>
				</svg>
				Unity Asset store
			</button>
			<button
				type="button"
				onClick={() => {
					window.open('https://github.com/RuntimeCube', '_blank')
				}}
				className="mb-2 mr-2 inline-flex items-center rounded-full bg-[#24292F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 dark:hover:bg-[#050708]/30"
			>
				<svg
					className="-ml-1 mr-2 h-4 w-4"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="github"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
				>
					<path
						fill="currentColor"
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					></path>
				</svg>
				Github
			</button>
		</div>
	)
}
