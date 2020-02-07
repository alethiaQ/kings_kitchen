import React, { Component } from 'react'
import {Menu, Container, Item} from 'semantic-ui-react'
class Nav extends Component {

    render() {
    return (
        <div>
        
            <Menu  >
                <Menu.Item>
                    {/* <img src='/logo.png' /> */}
                </Menu.Item>
                <Menu.Item>Features</Menu.Item>
                <Menu.Item>Testimonials</Menu.Item>
                <Menu.Item>Sign-in</Menu.Item>
            </Menu>
            
        </div>
        )
    }
}

export default Nav 