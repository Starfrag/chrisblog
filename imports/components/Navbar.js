import React, { Component } from 'react'
import { Menu, Segment, Dropdown } from 'semantic-ui-react'

export default class Navbar extends Component {

  // TODO Modification du bouton selon le status connecté/déconnecté

  state = {
    activeItem: 'Accueil'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <nav>
        <Segment inverted className='navbar'>
          <Menu inverted pointing secondary>

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

            <Menu.Menu position='right'>
              <Menu.Item
                name='Se déconnecter'
                active={activeItem === 'Se déconnecter'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>

          </Menu>
        </Segment>
      </nav>
    )
  }
}