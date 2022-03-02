import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const siteMap = async (req: { headers: { host: any; }; }, res: { writeHead: (arg0: number, arg1: { "Content-Type": string; }) => void; end: (arg0: string) => void; }) => {
  const links = [
    { url: "/", changefreq: "weekly", priority: 1 },
  ]

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

export default siteMap