import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://https://apartamentoribeirao.site/sitemap.xml",
    host: "https://apartamentoribeirao.site",
  };
}
