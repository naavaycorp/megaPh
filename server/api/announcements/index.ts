import { defineEventHandler } from "h3";

// Try to use Prisma if available; otherwise return mock data
let prisma: any = null;

const MOCK = [
  {
    id: 1,
    title: "Announcements",
    excerpt:
      "Welcome to the announcements page! Stay updated with the latest news, events, and important information from our community.",
    date: "2024-01-15",
    author: "Admin",
    reading: "5 min read",
    validity: "27-04-2024",
  },
  {
    id: 2,
    title: "Maintenance Notice",
    excerpt: "We will have scheduled maintenance on 2024-02-01.",
    date: "2024-01-25",
    author: "Ops",
    reading: "2 min read",
    validity: "01-02-2024",
  },
  {
    id: 3,
    title: "Feature Launch",
    excerpt: "New feature X is now available to all users.",
    date: "2024-03-10",
    author: "Product",
    reading: "3 min read",
    validity: "30-06-2024",
  },
];

export default defineEventHandler(async () => {
  // Attempt to lazy-load Prisma client at request time (avoids top-level await)
  if (!prisma) {
    try {
      // Build an absolute file URL at runtime so bundlers won't try to resolve it
      const { pathToFileURL } = await import("url");
      const clientPath = pathToFileURL(
        `${process.cwd()}/app/generated/prisma/client.js`
      ).href;
      const mod = await import(clientPath);
      const { PrismaClient } = mod;
      prisma = new PrismaClient();
    } catch (e) {
      // Prisma client not present or import failed — we'll use the mock
    }
  }

  if (prisma) {
    try {
      // Assuming a model named Announcement exists in your Prisma schema
      const list = await prisma.announcement.findMany({
        orderBy: { id: "asc" },
      });
      return list;
    } catch (e) {
      // model might not exist yet
      return MOCK;
    }
  }

  return MOCK;
});
