import { ShieldAlertIcon } from "lucide-react";

export default function ConfigurationPage() {
  return (<div>
    <h1 className="text-2xl font-medium mb-2">Configuration</h1>
    <p className="text-orange-500 font-semibold mb-2 flex items-center flex-wrap">
      <ShieldAlertIcon className="mr-2" /> There is currently no way to edit the scraper configuration. Here&apos;s some things to know about application behavior:
    </p>
    <ul className="mb-2">
      <li>• Puppeteer is used to scrape website (chromium)</li>
      <li>• Images are downloaded in full resolution</li>
      <li>• Videos are downloaded in full resolution</li>
      <li>• 5 Downloads by 5 downloads</li>
      <li>• 500ms between downloads</li>
      <li>• 1s between page navigations (if needed)</li>
    </ul>

    <p className="font-medium">The feature to edit the configuration will be added as soon as possible!</p>
  </div>)
}