import React from 'react'
import { Container, Header, Image, Icon } from 'semantic-ui-react'

const ContainerHeader = () => (
  <Container fluid textAlign='center' className='headerFluid'>
    <div>
      <Header as='h2' icon textAlign='center'>
        <Icon className='icon' name='users' />
        <Header.Content className='content'>Association-1901</Header.Content>
      </Header>
      <Image centered size='large' src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
    </div>
  </Container>
)

export default ContainerHeader