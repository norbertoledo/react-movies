import React from 'react';
import {Link} from 'react-router-dom';
import './error404.scss';
import {Button, Icon} from 'antd';
const Error404 = () => {
    return (
        <div className="error404">
            <Icon type="frown"  className="error404_frown"/>
            <h1>Error 404</h1>
            <h2>Page not found...</h2>
            <Button type="primary" href='/'>
                <Icon type="left"/>
                Go Home
            </Button>
        </div>
    );
}

export default Error404;
