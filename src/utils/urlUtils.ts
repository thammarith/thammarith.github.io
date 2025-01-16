import { EntryType } from "src/constants/entryTypes";
import { SiteUrl } from "src/constants/url";

export const buildBlogUrl = (site: string = SiteUrl, id: string) => `${site}${EntryType.BLOG}/${id}`;
