import casual from 'casual'
import { MockList } from 'graphql-tools'

export default {
  String: () => casual.string,
  User: () => ({
    name: casual.name,
    email: casual.email,
    bio: casual.text,
  }),
  Post: () => ({
    body: casual.sentences(10),
  }),
  RootQuery: () => ({
    posts: (o, { numPages=1 }) => new MockList(numPages * 5)
  })
}
