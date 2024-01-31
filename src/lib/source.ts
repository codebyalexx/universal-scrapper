// Default source parameters config
export const defaultSourceParams = {
  types: ["*"],
  sizes: ["higher"],
  downloads: {
    basePath: "./downloads/" as string,
    mode: "unified",
    maxSpeed: -1, // max download speed in kbs ( -1 for unlimited ),
    threads: 3, //
  },
};

// All sources are configured with recommended params to match rate limits
export const SourcesRepo = [
  {
    id: "pornhub-videos-scrapper",
    name: "Pornhub Videos Scrapper",
    params: {
      ...defaultSourceParams,
      baseUlr: "https://pornhub.com/",
      types: ["videos", "title", "description", "category"],
    },
  },
];
