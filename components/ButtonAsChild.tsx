import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/get-started">Get Started</Link>
    </Button>
  )
}
