import { getPostsByUserSlug } from './connectors'

const resolverMap = {
  RootQuery: {
    posts(root, args, context) {
      const { userSlug } = args
      return getPostsByUserSlug(userSlug)
        .then(posts => posts.map(post => ({
          id: post.link,
          link: post.link,
          title: post.title,
          body: post.contentSnippet,
          created: post.publishedDate,
          author: { slug: userSlug, name: post.author },
        }))
      )
    }
  }
}

export default resolverMap
