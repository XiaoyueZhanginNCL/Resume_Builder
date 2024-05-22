'use client'

import {usePathname} from 'next/navigation'
import {cx} from '../lib/cx'
import Link from 'next/link'
import Image from 'next/image'

export const TopNavBar = () => {
  const pathname=usePathname();
  const isHomePage=pathname==='/';

  return (
    <header
        aria-label='Site Header' //无障碍设计 为元素提供一个可读的文本标签,屏幕阅读器会读取它并告诉用户这个元素代表“网站的头部区域”
        className={cx(
            "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
            isHomePage && "bg-dot"
        )}
    >
        <div className='flex h-10 w-full items-center justify-between'>
            <Link href='/'>
                <div className='flex items-center justify-center gap-1'>
                    <Image src={'assets/heart.svg'} width={16} height={16} alt='logo' className='h-8 w-full' priority></Image>
                    <h1 className='text-xl whitespace-nowrap font-bold text-black'>Resume Builder and Parser</h1>
                </div>
                
            </Link>
            <nav aria-label='Site Nva Bar' className='flex items-center gap-2 text-sm font-medium'>
                {[
                    ["/resume-builder","Builder"],
                    ["/resume-parser","Parser"]].map(([href,text])=>(
                        <Link key={text} 
                              className='rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4' 
                              href={href}>
                                {text}
                        </Link>
                    ))
                }
            </nav>
        </div>
    </header>

  )
}
