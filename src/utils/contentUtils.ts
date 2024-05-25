import { getCollection } from "astro:content";
import { EntryType } from "src/constants/entryTypes";

export const getBlogEntries = async (isOnlyPublished: boolean = true) => {
    const blogEntries = await getCollection(EntryType.BLOG);
    return blogEntries.filter((entry) => isOnlyPublished ? !entry.data.isDraft : true)
};
