import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  max-width: var(--container);
  margin: auto;
  a {
    cursor: pointer;
  }
`

export const TechList = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  max-width: var(--container);
  padding: 2%;
  svg {
    padding: 10px;
    width: 52px;
  }
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--small);
`

export const Description = styled.h2`
  p {
    font-size: var(--large);
    line-height: var(--medium);
  }
  max-width: 600px;
`

export const Nav = styled.div`
  text-align: right;
  font-size: var(--small);
  padding-right: 20px;
  svg {
    padding: 10px;
    width: 52px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: white;
  margin-top: 15px;
  gap: 10px;
`
