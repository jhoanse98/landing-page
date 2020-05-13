import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2'  textAlign='center'>
      
      <Header.Content>Cidegen</Header.Content>
    </Header>
    <Image
      centered
      size='large'
      src=''
    />
    <div class="ui pointing menu">
        <div class="right menu">
            <a class="item">
                Inicio
            </a>
            <a class="item">
                Quienes somos
            </a>
            
            <div class="ui pointing dropdown link item">
                <span class="text">Enfermedades</span>
                <i class="dropdown icon"></i>
                <div class="menu">
                    <div class="item">Tumores</div>
                    <div class="item">Hematopias</div>
                </div>
            </div>
            <a class="item">
                Servicios
                <i class="dropdown icon"></i>
            </a>
            <a class="item">
                Catálogo
            </a>
            <a class="item">
                Artículos
            </a>
            <a class="item">
                Contacto
            </a>
        </div>
        
    </div>
    <Icon name='search' textAlign='center'/>  
  </div>
)

export default HeaderExampleUsersIcon
