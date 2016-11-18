import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Home from '../components/Home'

const HomeQuery = gql`
  query PostsBySlug($slug: String!) {
    posts(userSlug: $slug) {
      id
      link
      created
      title
      body
      author {
        name
        slug
      }
    }
  }
`;

export default graphql(HomeQuery, {
  options: {
    variables: { slug: 'mariana-graf' },
    // ssr: false
  },
  props: ({ data: { loading, posts, refetch } }) => ({
    loading, posts,
    refetchPosts: slug => refetch({ slug })
  }),
})(Home);
