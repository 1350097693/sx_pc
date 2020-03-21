import React, { Component } from 'react';
import './Header.css';
import cookie from 'react-cookies'
import { Button, Form } from 'reactstrap';


class Header extends Component {
    logout() {
        cookie.remove('adminname', { path: '/' })
    }
    render() {
        let adminname = cookie.load('adminname')
        return (
            <div className="header">
                晋淘淘后台管理
                <div className='adminname'>
                    <div>欢迎回来：{adminname}</div>
                    <Form>
                        <Button color="warning" size='sm' type='submit' style={{ "marginLeft": "15px" }} onClick={() => this.logout()}>退出登录</Button>
                    </Form>
                </div>

            </div>
        );
    }
}


export default Header;