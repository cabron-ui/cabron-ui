import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <Image src="/cabron-logo-h.svg" alt="Cabron UI" width="185" height="50" />,
  project: {
    link: "https://github.com/cabron-ui/cabron-ui",
  },
  docsRepositoryBase:
    "https://github.com/cabron-ui/cabron-ui/tree/main/apps/docs/pages",
  footer: {
    text: null,
    component: null,
  },
};

export default config;
