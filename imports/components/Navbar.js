import React, { Component } from 'react'
import { Menu, Dropdown, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  state = {
    activeItem: 'Accueil'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>

        <Link to="/">
          <Menu.Item
            name='Accueil'
            active={activeItem === 'Accueil'}
            onClick={this.handleItemClick}
          />
        </Link>

        {/* TODO - Ajouter handleItemClick sur les sous-menus/Dropdowns */}

        <Dropdown text='Association' pointing className='link item'
          name='Association'
          active={activeItem === 'Association'}
          onClick={this.handleItemClick}
        >
          <Dropdown.Menu>
            <Dropdown.Item>Trouver une association</Dropdown.Item>
            <Link to="/assos/add">
              <Dropdown.Item>Hidden(Ajouter mon association)</Dropdown.Item>
            </Link>
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

        {/* TODO Changer le bouton deconnexion en connexion si VISITEUR */}
        <Menu.Item position='right'>
          <Button compact color='red'>Deconnexion</Button>
        </Menu.Item>

      </Menu>
    )
  }
}