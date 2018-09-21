import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <nav>
        <Segment inverted className='navbar'>
          <Menu inverted pointing secondary>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick} />
            <Menu.Item
              name='messages'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='friends'
              active={activeItem === 'friends'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item
                name='log out'
                active={activeItem === 'log out'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
      </nav>
    )
  }
}