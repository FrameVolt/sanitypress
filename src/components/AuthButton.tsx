'use client'

import { JwtTokenStatus, useGuard, User } from '@authing/guard-react18'
import { Button } from '@mui/material'
import { useEffect, useState } from 'react'

export function AuthButton() {
	const guard = useGuard()
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [userInfo, setUserInfo] = useState<any>(null)

	useEffect(() => {
		guard.trackSession().then(
			(user) => {
				setIsAuthenticated(!!user)
				setUserInfo(user)
			},
			(error) => {
				console.error('Failed to track session:', error)
				setIsAuthenticated(false)
			},
		)
		// guardEffect()
		handleCallback()
	}, [guard])

	const handleLogin = () => {
		guard.startWithRedirect({ responseMode: 'form_post' })
	}

	const handleLogout = async () => {
		await guard.logout()
		setIsAuthenticated(false)
		setUserInfo(null)
		localStorage.removeItem('_authing_token')
		localStorage.removeItem('_authing_user')
	}

	if (isAuthenticated && userInfo) {
		return (
			<div className="flex items-center gap-2">
				<span>{userInfo.phone || userInfo.email}</span>
				<Button variant="outlined" onClick={handleLogout}>
					退出
				</Button>
			</div>
		)
	}

	const handleCallback = async () => {
		try {
			await guard.handleRedirectCallback()

			const loginStatus: JwtTokenStatus | undefined =
				await guard.checkLoginStatus()

			if (!loginStatus) {
				return console.error('Guard is not get login status')
			}

			const userInfo: User | null = await guard.trackSession()

			window.location.reload()
		} catch (e) {
			// 登录失败，推荐再次跳转到登录页面
			console.error('Guard handleAuthingLoginCallback error: ', e)
		}
	}
	return (
		<Button variant="contained" onClick={handleLogin}>
			登录/注册
		</Button>
	)
}

export default AuthButton
