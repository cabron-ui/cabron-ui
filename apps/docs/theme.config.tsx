import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <Image src="/next-ui-logo.png" alt="NEXT UI" width="130" height="30" />,
  project: {
    link: "https://github.com/lumada-design/hv-uikit-react",
  },
  docsRepositoryBase:
    "https://github.com/cabron-ui/cabron-ui/tree/main/apps/docs/pages",
  footer: {
    text: null,
    component: null,
  },
};

export default config;
