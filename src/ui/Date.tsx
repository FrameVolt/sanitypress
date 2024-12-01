export default function ({ value }: { value?: string }) {
	if (!value) return null

	const formatted = new Date(value + 'T00:00:00').toLocaleDateString('zh-CN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

	return <time dateTime={value}>{formatted}</time>
}
