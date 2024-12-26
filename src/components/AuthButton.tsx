'use client'

import { useGuard } from '@authing/guard-react18'
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
		console.log('auth token 123', 123)
	}, [guard])

	const handleLogin = () => {
		guard.startWithRedirect()
	}

	const handleLogout = async () => {
		await guard.logout()
		setIsAuthenticated(false)
		setUserInfo(null)
	}

	if (isAuthenticated && userInfo) {
		return (
			<div className="flex items-center gap-2">
				<span>{userInfo.username || userInfo.email}</span>
				<Button variant="outlined" onClick={handleLogout}>
					退出
				</Button>
			</div>
		)
	}

	return (
		<Button variant="contained" onClick={handleLogin}>
			登录
		</Button>
	)
}

export default AuthButton
