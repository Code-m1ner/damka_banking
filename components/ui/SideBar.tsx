"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const SideBar = (
    {user}:SiderbarProps
) => {
      const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link rel="stylesheet" href="/" className="mb-12 cursor-pointer items-center gap-2">
          <Image alt="Damka logo"
            src="/icons/logo.svg"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
            
          />
        <h1 className="sidebar-logo">
          Damka
        </h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname == item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link href={item.route} key={item.label}
              className={cn('sidebar-link',
              {'bg-bank-gradient':isActive})}
            >
              <div className="">

              </div>
            </Link>
          )
         })}
      </nav>
    </section>
)
}

export default SideBar