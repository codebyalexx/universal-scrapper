"use client"

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function HomePage() {
  return (<main>
    <h1 className="text-2xl font-bold">Hello World!</h1>
    <Button onClick={() => {
      toast.success('Lets go')
    }}>
      Toast!
    </Button>
  </main>)
}
