import React, { Component } from 'react';
import { Menu, Container, Dropdown, Icon } from 'semantic-ui-react';
class Nav extends Component {

    render() {
        return (
            <div>       
                <Menu  fixed='top' inverted >
                    <Container>
                        <Menu.Item as='a' header>
                        <Icon name="food" />
                        Culinary Comforts
                        </Menu.Item>    
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Dropdown item simple text='Packages'>
                            <Dropdown.Menu>
                                <Dropdown.Item>List Item</Dropdown.Item>
                                <Dropdown.Item>List Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Container>     
                </Menu>
            
            </div>
        );
    };
};

export default Nav 