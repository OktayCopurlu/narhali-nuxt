import { client } from "~/plugins/contentful";

export async function getContent(content, route) {
  const response = await client.getEntries({
    content_type: content,
    "fields.slug": route,
  });

  return response.items[0].fields;
}
