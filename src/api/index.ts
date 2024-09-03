import { sanityClient } from "@/lib/sanity";
import { Tag } from "@/types";

export async function getServices(): Promise<Tag[]> {
  const posts = await sanityClient.fetch('*[_type == "services"]');
  return posts;
}
