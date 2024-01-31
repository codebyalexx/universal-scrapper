"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addArtist } from "@/features/actions/artist.action"
import { useState } from "react"
import { toast } from "sonner"

export const AddArtistForm = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')

  return (<div>
    <h1 className="text-2xl font-medium mb-2">Add Artist</h1>
    <p className="mb-4">Create a artist gives you the ability to download same artist from multiples sources.</p>
    <form className="flex items-end justify-between gap-2 flex-wrap sm:flex-nowrap" onSubmit={async (e) => {
      e.preventDefault()

      if (name.length === 0) return setNameError('Name field should not be empty!')
      setNameError('')

      await addArtist(name)

      toast.success('Successfully added ' + name + ' artist!')
      setName('')
    }}>
      <div className="w-full">
        <Label htmlFor="name" className="mb-1">Artist Name</Label>
        <Input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="E.g. : John Doe" 
          className={nameError.length > 0 ? "border-2 border-red-500": ""} />
      </div>
      <div className="w-full">
        <Button className="w-full" variant={"secondary"} type="submit">
          Create
        </Button>
      </div>
    </form>
    {nameError.length > 0 ? <p className="text-sm font-semibold text-red-500 pt-1">{nameError}</p> : ""}
  </div>)
}