import fs from 'fs'
import path from 'path'
import { GetStaticPaths, GetStaticProps } from 'next'

interface DocPageProps {
	content: string
}

const DocPage: React.FC<DocPageProps> = ({ content }) => {
	return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params?.slug ? (params.slug as string[]).join('/') : 'index.html'
	const filePath = path.join(process.cwd(), 'public', 'rtcextension-doc', slug)

	// 读取静态 HTML 文件内容
	const fileContent = fs.readFileSync(filePath, 'utf-8')

	return {
		props: {
			content: fileContent,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [], // 不预生成任何路径
		fallback: 'blocking', // 按需生成页面
	}
}

export default DocPage
