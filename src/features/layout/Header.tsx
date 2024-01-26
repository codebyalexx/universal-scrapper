import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const Header = ({className}: {className?: string}) => {
  return (<div className={(cn("container max-w-2xl flex items-center h-full", className))}>
    <header className="w-full flex justify-between items-center p-2">
      <h1 className="text-2xl font-bold text-foreground">Universal Scraper</h1>
      <Button variant={"outline"}>Get Started</Button>
    </header>
  </div>)
}