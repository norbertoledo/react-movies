import React from 'react';
import {Spin} from 'antd';

const Spinner = () => {

    const styles = {
        spinner:{
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text:{
           
            color: '#999',
            fontSize: '11px'
        }

    }


    return (
        <div style={styles.spinner}>
            <Spin size='large'/>
            <h5 style={styles.text}>Loading...</h5>
        </div>
    );
}

export default Spinner;
