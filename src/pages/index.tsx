import HomeTemplate from 'templates/Home'
import client from 'graphql/client'
import { GET_PROFILE } from 'graphql/queries'
import { GetProfileQuery } from 'graphql/generated/graphql'

export default function Home({ profiles }) {
  return <HomeTemplate profile={profiles} />
}

export const getStaticProps = async () => {
  const { profiles } = await client.request<GetProfileQuery>(GET_PROFILE)
  return {
    props: {
      profiles
    }
  }
}
