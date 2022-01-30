import { client } from "~/plugins/contentful";

export async function useContent(content = "magazalarimiz", route) {
  const response = await client.getEntries({
    content_type: content,
    "fields.slug": route,
  });

  return response.items[0].fields;
}

export async function useContents(app, pQuery) {
  const grapClient = app.apolloProvider.defaultClient;
  const result = await grapClient.query({
    query: pQuery,
  });
  return result.data;
}
