'use client'
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Navigation = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	return (
		<Toolbar className="max-md:anim-fade-to-r flex gap-y-2 [grid-area:nav] max-md:my-4 max-md:flex-col max-md:header-closed:hidden md:justify-center">
			<Button variant="text" href="/" className="rtcbutton">
				主页
			</Button>
			<Button variant="text" href="/blog" className="rtcbutton">
				博客
			</Button>
			<Button
				variant="text"
				className="rtcbutton"
				onClick={handleMenuOpen} // 打开子菜单
				endIcon={<KeyboardArrowDownIcon />}
			>
				插件
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={handleMenuClose}
			>
				<MenuItem
					onClick={handleMenuClose}
					component="a"
					href="/rtcextension-doc/index.html"
				>
					RMM3D
				</MenuItem>
				<MenuItem
					onClick={handleMenuClose}
					component="a"
					href="/rtcextension-doc/index.html"
				>
					Digital Marketing
				</MenuItem>
			</Menu>
			<Button href="/recommend-blog" className="rtcbutton">
				推荐博客
			</Button>

			<Button
				onClick={() => {
					console.log('adsf')
				}}
				component="a"
			>
				价格
			</Button>
		</Toolbar>
	)
}

export default Navigation
