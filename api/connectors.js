import { parse } from 'feed-reader'

export function getPostsByUserSlug (slug) {
  const url = `http://blog.taller.net.br/author/${slug}/feed/`

  return parse(url).then(feed => feed.entries)
}
