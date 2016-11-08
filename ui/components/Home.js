import React, { Component, PropTypes } from 'react';

const Home = ({ loading, posts = [], refetchPosts }) => {

  return (
    <div>
      <h2>{ 'Taller\'s' } last posts from:</h2>
      <SearchByUserSlug onSearchSubmit={ refetchPosts } />
      { !loading && <PostList posts={ posts } /> }
      { loading && <h4>Wait a second ...</h4> }
    </div>
  )
}

Home.propTypes = {
  loading: PropTypes.bool,
  posts: PropTypes.array,
  refetchPosts: PropTypes.func,
}

export default Home

class SearchByUserSlug extends Component {
  state = { slug: 'mariana-graf' }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSearchSubmit(this.state.slug)
  }

  handleChange = event => {
    const { target: { value } } = event
    this.setState({ slug: value })
  }

  render() {
    const { slug } = this.state

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          onChange={ this.handleChange }
          value={ slug } type='text'
          placeholder='mariana-graf, rafael-caceres, ...'
        />
      </form>
    )
  }
}

const PostList = ({ posts }) => {
  return (
    <ul>
      { posts.map(({ id, title, link, body, author }) => (
        <li key={ id } style={ { marginBottom: '30px' } }>
          <h3><a href={ link } target='_blank'>{ title }</a></h3>
          <p>{ body }</p>
        </li>
      )) }
    </ul>
  )
}
