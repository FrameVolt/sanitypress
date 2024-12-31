'use client'

import { GuardProvider } from '@authing/guard-react18'
import '@authing/guard-react18/dist/esm/guard.min.css'
import { ReactNode } from 'react'

const authingConfig = {
	appId: process.env.NEXT_PUBLIC_AUTHING_APP_ID!,
	appHost: process.env.NEXT_PUBLIC_AUTHING_APP_HOST!,
	redirectUri: process.env.NEXT_PUBLIC_AUTHING_REDIRECT_URI!,
}

export function AuthWrapper({ children }: { children: ReactNode }) {
	return (
		<GuardProvider
			appId={authingConfig.appId}
			host={authingConfig.appHost}
			redirectUri={authingConfig.redirectUri}
			config={{
				host: authingConfig.appHost,
				isSSO: true,
				defaultLoginMethod: 'password',
				defaultRegisterMethod: 'email',
			}}
		>
			{children}
		</GuardProvider>
	)
}

export default AuthWrapper
