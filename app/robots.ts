import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
<<<<<<< HEAD
    sitemap: "https://apartamentoribeirao.site/sitemap.xml",
=======
    sitemap: "https://https://apartamentoribeirao.site/sitemap.xml",
>>>>>>> 0548423d9e634138cdd9b7c9d9cd65e87bb23838
    host: "https://apartamentoribeirao.site",
  };
}
