"use client"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Copy, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function MigrationPage() {
  return (<div>
    <div className="mb-10">
      <h1 className="text-2xl font-semibold mb-2">How to Migrate</h1>
      <p className="mb-3">Welcome to this guide that will help you to install and/or migrate to any version of the app whatever the version you are currently using.</p>
      
      <p>The project need the following requirement to run correctly, as it currently don&apos;t support Docker :</p>
      <ul className="pl-2 mb-3">
        <li className="font-semibold">• Node version 21</li>
        <li className="font-semibold">• Npm version 10</li>
      </ul>

      <div>
        <Link href="#download" className="block text-blue-500 underline mb-2">1. Download</Link>
        <Link href="#npm" className="block text-blue-500 underline mb-2">2. Node</Link>
        <Link href="#prisma" className="block text-blue-500 underline">3. Prisma update</Link>
        <Link href="#launch" className="block text-blue-500 underline">4. Run the app</Link>
      </div>
    </div>


    <div className="mb-10" id="download">
      <Separator className="mb-2" />
      <h2 className="text-xl font-semibold mb-2">1. Download the new version</h2>
      <p>Download the files of the new version is the first step of updating the application (obviously). You have 2 ways to do it, not that the first way is the easier.</p>
      
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Way 1 : Using git pull</h3>
        <p>If you have cloned the project using Github, you could just run the following command :</p>
        <CommandLineBlock command="git pull" />
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Way 2 : Downloading from Github</h3>
        <p className="mb-2">To download the project ZIP file, just click <Link href="https://codeload.github.com/codebyalexx/universal-scrapper/zip/refs/heads/main" target="_blank">this link</Link>.</p>
        <p className="mb-2">Next step is to copy all files to the directory where you have already installed Universal Scraper.</p>
        <p>If your system ask you to replace files, click yes to all.</p>
      </div>
    </div>


    <div className="mb-10" id="npm">
      <Separator className="mb-2" />
      <h2 className="text-xl font-semibold mb-2">2. Installing node modules</h2>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">npm</h3>
        <p>To install node modules using npm package manager, run:</p>
        <CommandLineBlock command="npm install" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">pnpm</h3>
        <p>To install node modules using pnpm package manager, run:</p>
        <CommandLineBlock command="pnpm install" />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">yarn</h3>
        <p>To install node modules using yarn package manager, run:</p>
        <CommandLineBlock command="yarn install" />
      </div>
    </div>


    <div className="mb-10" id="prisma">
      <Separator className="mb-2" />
      <h2 className="text-xl font-semibold mb-2">3. Updating Prisma schema</h2>
      <p className="text-red-500 font-semibold flex items-center mb-2"><ShieldAlert className="mr-2" /> Before updating Prisma Schema, make sure that your app is closed!</p>
      
      <p className="mb-2">Updating Prisma database is the most important thing when you just migrated to a newer version. To proceed, just run a simple command from the dir where you installed the app :</p>
      <CommandLineBlock command="prisma migrate dev" />
      
      <p>Sometimes, the command could not be launched as prisma isn&apos;t detected by your shell. To proceed, you can run this command instead :</p>
      <CommandLineBlock command="./node_modules/.bin/prisma migrate dev" />
      
      <p className="mb-2">Then hit enter to proceed migration. When it prompts you a name, type anything to confirm and migrate!</p>
      <p>In case this solution does not work for you, just open a ticket on <Link className="underline text-blue-500" href={"https://discord.gg/GE8MNBPXFy"} target="_blank">our Discord</Link>.</p>
    </div>


    <div className="mb-10" id="launch">
      <Separator className="mb-2" />
      <h2 className="text-xl font-semibold mb-2">4. Running the application!</h2>
      <p className="mb-2">Latest step is to run the application, build is currently not supported as the project has just been created.</p>
      <p className="mb-2">Running in dev environment is safer for the moment, but soon build and docker configuration will be added to the project. Note that the build errors will not be supported by our discord or in github issues.</p>

      <p className="mb-2">So, to run the app, simply run this command:</p>
      <CommandLineBlock command="npm run dev" />
      <p>The app will launch in port 3000 by default but you can visit <Link href={"/configuration"} className="text-blue-500 underline">configuration guide</Link> to learn how to edit this.</p>
    </div>
  </div>)
}

export const CommandLineBlock = ({ command }: {command: string}) => {
  return (<p className="bg-gray-700/20 rounded-lg p-2 w-full my-1 text-base font-normal flex items-center font-mono">
    <div className="w-full flex items-center">
      <ChevronRight className="text-foreground/50 mr-1" />
      <span>
        {command}
      </span>
    </div>
    <Button variant={"ghost"} size={"sm"} className="opacity-50" onClick={() => {
      navigator.clipboard.writeText(command)
      toast.success("Block code successfully copied to clipboard!")
    }} >
      <Copy />
      <span className="sr-only">Copy</span>
    </Button>
  </p>)
}