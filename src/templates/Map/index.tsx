import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/linkWrapper'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function MapTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo title="About the project" />
      <LinkWrapper href="/">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
