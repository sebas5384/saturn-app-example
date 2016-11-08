import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Home from '../components/Home'

const HomeQuery = gql`
  query PostsBySlug($slug: String!) {
    getPosts(userSlug: $slug) {
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
    forceFetch: true,
    variables: { slug: 'mariana-graf' }
  },
  props: ({ data: { loading, getPosts, refetch } }) => ({
    loading, posts: getPosts,
    refetchPosts: slug => refetch({ slug })
  }),
})(Home);
