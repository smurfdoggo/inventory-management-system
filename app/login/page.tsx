import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { BoxesIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Log in | Inventory Management",
  description: "Log in to your inventory management account.",
}

export default function LoginPage() {
  return (
    <main className="grid min-h-svh flex-1 lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <BoxesIcon aria-hidden="true" className="size-4" />
            </div>
            Inventory
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/login-cover.jpg"
          alt="Warehouse shelves stocked with neatly organized inventory"
          fill
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </main>
  )
}
