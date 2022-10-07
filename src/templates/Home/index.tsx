import * as S from './styles'
import {
  Yourtraveldottv,
  Nextdotjs,
  Graphql,
  Typescript,
  Jest,
  Eslint,
  Styledcomponents,
  Github
} from '@styled-icons/simple-icons'
import LinkWrapper from 'components/linkWrapper'
import Link from 'next/link'

export type PageTemplateProps = {
  heading: string
  body: string
}

const HomeTemplate = () => (
  <>
    <LinkWrapper href="https://github.com/velosos">
      <Github size={32} />
    </LinkWrapper>

    <S.Content>
      <Link href="/trips">
        <a>
          <Yourtraveldottv size={70} />
        </a>
      </Link>
      <S.Heading>mapTrips</S.Heading>
      <S.Description>
        {' '}
        Project built with best development practices. Tests, lint, SEO,
        integrations and performance. In addition to map integration with
        leaflet.
      </S.Description>
      <S.Icons>
        <Typescript size={40} />
        <Nextdotjs size={40} />
        <Graphql size={40} />
        <Jest size={40} />
        <Eslint size={40} />
        <Styledcomponents size={40} />
      </S.Icons>
    </S.Content>
  </>
)

export default HomeTemplate
