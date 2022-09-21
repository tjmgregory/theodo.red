import { getAllPosts, Post } from '../lib/api'
import Head from 'next/head'
import styled from 'styled-components'

type Props = {
  allPosts: Post[]
}

export default function Index({}: Props) {
  return (
    <>
      <Head>
        <title>Theo Gregory's Mumble Rag</title>
      </Head>
      <Page>{'foo'}</Page>
    </>
  )
}

const Page = styled('div')`
  padding: 8px 16px;
`

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
