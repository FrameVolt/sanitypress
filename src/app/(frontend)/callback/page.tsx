'use client'

import { useGuard } from '@authing/guard-react18'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CallbackPage() {
	const guard = useGuard()
	const router = useRouter()

	useEffect(() => {
		guard.handleRedirectCallback().then(
			(user) => {
				console.log('登录成功', user)
				router.push('/')
			},
			(error) => {
				console.error('登录失败', error)
				router.push('/login')
			},
		)
	}, [guard, router])

	return (
		<div className="flex h-screen items-center justify-center">
			<div>处理登录中...</div>
		</div>
	)
}
