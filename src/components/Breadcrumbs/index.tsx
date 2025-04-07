'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
  homeElement: ReactNode,
  separator: ReactNode,
  containerClasses?: string,
  listClasses?: string,
  activeClasses?: string,
  capitalizeLinks?: boolean
}

const Breadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {

  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)
  console.log({ pathNames })

  return (
    <div>
      <ul className={containerClasses}>
        <li className={listClasses}><Link href={'/'}>{homeElement}</Link></li>
        {pathNames.length > 0 && separator}
        {
          pathNames.map((link, index) => {
            console.log({ link })
            const href = `/${pathNames.slice(0, index + 1).join('/')}`
            const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
            const itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
            return (
              <React.Fragment key={`${link}-${index}`}>
                <li className={link === 'pokemon' ? `pointer-events-none hover:no-underline ${itemClasses}` : itemClasses} >
                  <Link href={href} className={link === 'pokemon' ? `pointer-events-none` : ''}
                    aria-disabled={link === 'pokemon'}
                    tabIndex={link === 'pokemon' ? -1 : undefined}
                  >{itemLink}</Link>
                </li>
                {pathNames.length !== index + 1 && separator}
              </React.Fragment>
            )
          })
        }
      </ul>
    </div >
  )
}

export default Breadcrumb