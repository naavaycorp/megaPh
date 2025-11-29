import { createError, defineEventHandler } from "h3";

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
    body: [
      "This is the full announcement content. It expands on the excerpt and provides the reader with useful details, links, and next steps.",
      "Use this page to show the complete announcement. You can add multiple paragraphs, images, and actions. The layout is responsive and mobile-first using Tailwind CSS.",
      "Keep important dates and calls-to-action near the top so users can easily find what they need.",
    ],
  },
  {
    id: 2,
    title: "Maintenance Notice",
    excerpt: "We will have scheduled maintenance on 2024-02-01.",
    date: "2024-01-25",
    author: "Ops",
    reading: "2 min read",
    validity: "01-02-2024",
    body: [
      "Our platform will undergo scheduled maintenance to improve performance and security.",
      "Services may be temporarily unavailable during the maintenance window. We appreciate your patience.",
    ],
  },
  {
    id: 3,
    title: "Feature Launch",
    excerpt: "New feature X is now available to all users.",
    date: "2024-03-10",
    author: "Product",
    reading: "3 min read",
    validity: "30-06-2024",
    body: [
      "Feature X introduces improvements to the user workflow.",
      "Read the documentation to understand migration steps and examples.",
    ],
  },
];

export default defineEventHandler(async (event) => {
  const idParam = event.context?.params?.id;
  if (!idParam) {
    throw createError({ statusCode: 400, statusMessage: "Missing id" });
  }

  const id = Number(idParam);

  // Lazy-load Prisma client if it's available (no top-level await)
  if (!prisma) {
    try {
      const { pathToFileURL } = await import("url");
      const clientPath = pathToFileURL(
        `${process.cwd()}/app/generated/prisma/client.js`
      ).href;
      const mod = await import(clientPath);
      const { PrismaClient } = mod;
      prisma = new PrismaClient();
    } catch (e) {
      // Prisma not present or import failed — continue with mock
    }
  }

  if (prisma) {
    try {
      const found = await prisma.announcement.findUnique({ where: { id } });
      if (found) return found;
    } catch (e) {
      // if Prisma query fails, fall back to mock
    }
  }

  const found = MOCK.find((a) => a.id === id);
  if (!found) {
    throw createError({
      statusCode: 404,
      statusMessage: "Announcement not found",
    });
  }

  return found;
});
