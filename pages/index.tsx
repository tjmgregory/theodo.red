import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
}

export default function Index({}: Props) {
  return (
    <>
      <Head>
        <title>Theo Gregory's Mumble Rag</title>
      </Head>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
