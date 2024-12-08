import createCache from '@emotion/cache'

// 为 SSR 创建 Emotion 缓存
const isBrowser = typeof document !== 'undefined'

export default function createEmotionCache() {
	return createCache({ key: 'mui', prepend: true })
}
