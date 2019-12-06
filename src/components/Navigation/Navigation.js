import React from 'react';
import './Navigation.scss';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/img/logo.svg';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation_logo">
                <Logo />
            </div>
            <Menu
                theme="dark"
                mode='horizontal'
                defaultSelectedKeys={["1"]}
                style={{lineHeight:"64px"}}
            >
                <Menu.Item key="1">
                    <Link to="/">HOME</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/new-movies">NEW MOVIES</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/popular">POPULAR</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/search">SEARCH</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Navigation;
