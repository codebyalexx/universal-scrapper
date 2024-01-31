"use client"

import { AddArtistForm } from "@/app/artists/create/AddArtistForm"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { usePathname, useRouter } from "next/navigation"

export const AddArtistModal = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (<Dialog open={pathname === '/artists/create'} onOpenChange={() => {
    router.back()
  }}>
      <DialogContent>
        <AddArtistForm />
      </DialogContent>
  </Dialog>)
}