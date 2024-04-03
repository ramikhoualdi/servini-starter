import * as React from "react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shells/shell"


export default async function IndexPage() {

  return (
    <Shell className="max-w-6xl">
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 py-24 text-center md:py-32">
      <Link href="github.com" target="_blank" rel="noreferrer">
        <Badge
          aria-hidden="true"
          className="rounded-md px-3.5 py-1.5"
          variant="secondary"
        >
          <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" />
          12K stars on GitHub
        </Badge>
        <span className="sr-only">GitHub</span>
      </Link>
      <h1 className="text-balance font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        An e-commerce skateshop built with everything new in Next.js
      </h1>
      <p className="max-w-[42rem] text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Buy and sell skateboarding gears from independent brands and stores
        around the world with ease
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href="/products">
            Buy now
            <span className="sr-only">Buy now</span>
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/dashboard/stores">
            Sell now
            <span className="sr-only">Sell now</span>
          </Link>
        </Button>
      </div>
    </section>
  </Shell>
  )
}
