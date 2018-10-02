import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const HeaderForm = () => (
  <Container fluid textAlign='center' className='headerForm'>
    <div>
      <Header as='h2' icon textAlign='center'>
        <Header.Content className='content'>Association-1901</Header.Content>
      </Header>
    </div>
  </Container>
)

export default HeaderForm