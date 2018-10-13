import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class Navbar extends Component {

  state = {
    activeItem: 'Accueil'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <MainContainer>
        <MenuItem bold to="/">
            Accueil
        </MenuItem>
        <MenuItem to="/assos">
            Associations
        </MenuItem>
        <MenuItem to="/contact">
            Contact
        </MenuItem>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 5em;
  border-bottom: 1px solid #ececec;
`

const MenuItem = styled(Link)`
  height: 100%;
  background-color: #ececec;
  display: flex;
  align-items: center;
  font-weight: ${props => props.bold && "bold"}
  justify-content: center;
  padding: 1em;
  cursor: pointer;

  &:hover{
    background-color: #dcdcdc;
  }
`