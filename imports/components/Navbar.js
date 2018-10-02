import React, { Component } from 'react'
import { Menu, Dropdown, Button } from 'semantic-ui-react'

export default class Navbar extends Component {

  state = {
    activeItem: 'Accueil'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>

        <Menu.Item
          name='Accueil'
          active={activeItem === 'Accueil'}
          onClick={this.handleItemClick}
        />

        {/* TODO - Ajouter handleItemClick sur les sous-menus/Dropdowns */}

        <Dropdown text='Association' pointing className='link item'
          name='Association'
          active={activeItem === 'Association'}
          onClick={this.handleItemClick}
        >
          <Dropdown.Menu>
            <Dropdown.Item>Trouver une association</Dropdown.Item>
            <Dropdown.Item>Hidden(Ajouter mon association)</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Mon Compte' pointing className='link item'
          name='Mon Compte'
          active={activeItem === 'Mon Compte'}
          onClick={this.handleItemClick}
        >
          <Dropdown.Menu>
            <Dropdown.Item>Hidden(Consulter mon profil)</Dropdown.Item>
            <Dropdown.Item>Créer un compte</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item position='right'>
          <Button primary>Sign up</Button>
        </Menu.Item>

        <Menu.Item>
          <Button>Log-in</Button>
        </Menu.Item>

      </Menu>
    )
  }
}