'use client'

import { Button } from '@/components/ui/button'
import { Facebook, Github, Instagram, Link2, Linkedin, Send, Twitter } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

function ShareBtns() {
	const pathname = usePathname()

	const onCopy = () => {
		const link = process.env.NEXT_PUBLIC_BASE_URL + pathname
		navigator.clipboard
			.writeText(link)
			.then(() => toast.success('Copied to clipboard'))
	}

	return (
		<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
		<Link href={'https://github.com/Doston1002'}>
		
		<Button size={'icon'} variant={'outline'}>
		  
		  <Github />
		</Button>
		</Link>
		<Link href={'https://www.linkedin.com/in/dostonpolatov/'}>
		<Button size={'icon'} variant={'outline'}>
		  <Linkedin />
		</Button>
		</Link>
		<Link href={'https://www.instagram.com/doston__1002/'}>
		<Button size={'icon'} variant={'outline'}>
		  <Instagram />
		</Button>
		</Link>
		<Link href={'https://t.me/Doston1002'}>
		<Button size={'icon'} variant={'outline'}>
		  <Send />
		</Button>
		</Link>
		<Button size={'icon'} variant={'outline'} onClick={onCopy}>
		  <Link2 />
		</Button>
	  </div>
	)
}

export default ShareBtns
