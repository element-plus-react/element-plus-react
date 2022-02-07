import React from 'react'
import { Container } from 'element-plus-react'
import './index.scss'

const Demo = () => {
  return (
    <div className="common-layout">
      <Container>
        <Container.Header>Header</Container.Header>
        <Container.Main>Main</Container.Main>
      </Container>
      <Container>
        <Container.Header>Header</Container.Header>
        <Container.Main>Main</Container.Main>
        <Container.Footer>Footer</Container.Footer>
      </Container>
      <Container>
        <Container.Aside width="200px">Aside</Container.Aside>
        <Container.Main>Main</Container.Main>
      </Container>
      <Container>
        <Container.Header>Header</Container.Header>
        <Container>
          <Container.Aside width="200px">Aside</Container.Aside>
          <Container.Main>Main</Container.Main>
        </Container>
      </Container>
      <Container>
        <Container.Header>Header</Container.Header>
        <Container>
          <Container.Aside width="200px">Aside</Container.Aside>
          <Container>
            <Container.Main>Main</Container.Main>
            <Container.Footer>Footer</Container.Footer>
          </Container>
        </Container>
      </Container>
      <Container>
        <Container.Aside width="200px">Aside</Container.Aside>
        <Container>
          <Container.Header>Header</Container.Header>
          <Container.Main>Main</Container.Main>
        </Container>
      </Container>
      <Container>
        <Container.Aside width="200px">Aside</Container.Aside>
        <Container>
          <Container.Header>Header</Container.Header>
          <Container.Main>Main</Container.Main>
          <Container.Footer>Footer</Container.Footer>
        </Container>
      </Container>
    </div>
  )
}

export default Demo