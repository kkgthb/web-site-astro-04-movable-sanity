import {
  projectId,
  dataset,
  apiReadToken as token,
  useCdn,
  todaysDateFormattedForSanityApiVersion as apiVersion,
} from "./environment";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId,
  dataset,
  token,
  useCdn,
  apiVersion,
});
