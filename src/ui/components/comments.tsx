'use client'
import Giscus from '@giscus/react'

export default function Comments() {
	return (
		<Giscus
			id="comments"
			repo="FrameVolt/sanitypress"
			repoId="R_kgDONW2AsQ"
			category="General"
			categoryId="DIC_kwDONW2Asc4CkxQu"
			mapping="pathname"
			term="Welcome to @giscus/react component!"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="bottom"
			theme="preferred_color_scheme"
			lang="zh-CN"
			loading="lazy"
		/>
	)
}
