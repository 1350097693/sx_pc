import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import classnames from 'classnames';
import { fetchAPI,addAPI} from '../../redux/action.js';
import cookie from 'react-cookies'
import './Login.css';



class Login extends Component {
    constructor(){
        super()
        this.state={
            activeTab:'1',
            name:'',
            password:'',
        }
        this.nameChange = this.nameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.submitAdmin= this.submitAdmin.bind(this)
        this.loginAdmin= this.loginAdmin.bind(this)
    }
    componentDidMount(){
        this.props.fetchAPI('/adminAll')
    }
    loginAdmin(){
        let adminList=this.props.adminList
        let {name,password} = this.state
        for(let i=0;i<adminList.length;i++){
            if(adminList[i].mName===name){
                if(adminList[i].mPassword===password){
                    cookie.save('adminname', name, { path: '/' })
                    break
                }
            }
        }
        console.log(cookie.load('adminname'))
    }
    submitAdmin(e) {
        e.preventDefault();
        let {name,password} = this.state
        this.props.addAPI('/addAdmin',{name,password})
        this.setState({
            activeTab:'1',
            name:'',
            password:'',
        })
        this.props.fetchAPI('/adminAll')
    }
    nameChange(e) {
        this.setState({ 
            name: e.target.value 
        });
    }
    passwordChange(e){
        this.setState({ 
            password: e.target.value 
        });
    }
    toggle (tab){
        if (this.state.activeTab !== tab){
            this.setState({
                activeTab:tab,
                name:'',
                password:'',
            })
        };
    }
    render() {
    return (
        <div className='login'>
            <div className='login-middle'>
                <h2 className='login-title'>晋淘淘后台管理系统</h2>
                <div className='login-card'>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                登录
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                注册
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">姓名:</Label>
                                    <Input type="text" value={this.state.name}  onChange={this.nameChange} name="email" id="exampleEmail" placeholder="请输入姓名" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">密码:</Label>
                                    <Input type="password" value={this.state.password}  onChange={this.passwordChange} name="password" id="examplePassword" placeholder="请输入密码" />
                                </FormGroup>
                                <Button className='login-btn' color='success' type='submit' onClick={this.loginAdmin}>登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tabId="2">
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">姓名:</Label>
                                    <Input type="text" value={this.state.name}  onChange={this.nameChange} name="email" id="exampleEmail" placeholder="请输入姓名" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">密码:</Label>
                                    <Input type="text" value={this.state.password}  onChange={this.passwordChange} name="password" id="examplePassword" placeholder="请输入密码" />
                                </FormGroup>
                                <Button className='login-btn' color='warning' onClick={this.submitAdmin}>注册</Button>
                            </Form>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
    }
}

function mapStateToProps(state) {
    return {
        adminList: state.data,
    };
}

export default connect(mapStateToProps, {fetchAPI,addAPI})(Login); 