import { loadEnv } from "vite";
const loadedEnv = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export const projectId: string = loadedEnv.SANITY_PROJECT_ID!;
export const dataset: string = loadedEnv.SANITY_DATASET!;
export const apiReadToken: string = loadedEnv.SANITY_API_READ_TOKEN!;
export const useCdn: boolean =
  loadedEnv.NODE_ENV === "production" && !apiReadToken; // Turns off a buildtime nastygram.  Private datasets aren't in the CDN anyway.
export const todaysDateFormattedForSanityApiVersion: string =
  new Date().toLocaleDateString("en-CA");
