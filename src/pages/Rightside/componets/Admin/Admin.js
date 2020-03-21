import React, { Component } from 'react';
import './Admin.css'
import { connect } from 'react-redux'

import { Table, Button, Breadcrumb, BreadcrumbItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { fetchAPI, addAPI ,deleteAPI, updataAPI,fetchAPICount} from '../../../../redux/action.js';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            password:'',
            id:'',
            type:'add',
            
        }
        this.page=[1]
        this.currntPage=0
        this.nameChange = this.nameChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.submitAdmin = this.submitAdmin.bind(this)
        this.deleteAdmin = this.deleteAdmin.bind(this)
        this.updataAdmin = this.updataAdmin.bind(this)
        this.changeData = this.changeData.bind(this)
    }
    
    componentDidMount() {
        this.updata()
    }
    updata(){
        this.props.fetchAPI('/admin',{"currntPage":this.currntPage})
        this.props.fetchAPICount('/adminCount')
    }
// 分页功能
    paging(){
        if(this.props.count){
            this.page=[]
            let pagenumber=Math.ceil(this.props.count/6);
            for(let i=1;i<=pagenumber;i++){
                this.page.push(i)
            }
        }
    }
    changeData(e){
        this.currntPage=(e.target.getAttribute("data-currntpage")-1)
        this.updata()
    }
    btnData(direction){
        if(direction==='pre'&&this.currntPage>0){
            this.currntPage--
        }else if(direction==='next'&& this.currntPage<Math.ceil(this.props.count/6)-1){
            this.currntPage++
        }
        this.updata()
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
    updataAdmin(e){
        this.setState({
            show: true,
            name:e.target.getAttribute("data-name"),
            password:e.target.getAttribute("data-password"),
            id:e.target.id,
            type:'updata',
        })
    }
    deleteAdmin(e){
        this.props.deleteAPI('/deleteAdmin',{mId:e.target.id})
        this.updata()
    }
    submitAdmin(e) {
        e.preventDefault();
        let {name,password,id} = this.state
        if(this.state.type==='add'){
            this.props.addAPI('/addAdmin',{name,password})
            
        }else if(this.state.type==='updata'){
            this.props.updataAPI('/updataAdmin',{name,password,id})
        }
        this.setState({
            show: false
        })
        this.updata()
        
    }
    addAdmin(event) {
        this.setState({
            show: true,
            type:'add',
            name:'',
            password:'',
        })
    }
    cancel(e) {
        this.setState({
            show: false
        })
    }
    render() {
        this.paging()
        return (
            <div className='user'>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">首页</a></BreadcrumbItem>
                    <BreadcrumbItem active>管理员列表</BreadcrumbItem>
                </Breadcrumb>
                <div className="conntent">
                    <Button color="success" onClick={() => this.addAdmin()}>添加管理员</Button>
                    <div className='user-list'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Mid</th>
                                    <th>姓名</th>
                                    <th>密码</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.props.adminList && this.props.adminList.map((item) => {
                                        return (
                                            <tr key={item.mId}>
                                                <td>{item.mId}</td>
                                                <td>{item.mName}</td>
                                                <td>{item.mPassword}</td>
                                                <td>
                                                    <Button color="success" id={item.mId} data-name={item.mName} data-password={item.mPassword} size="sm" style={{ "marginRight": "10px" }} onClick={this.updataAdmin}>修改</Button>
                                                    <Button color="danger" type='submit' id={item.mId} size="sm" onClick={this.deleteAdmin}>删除</Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#" onClick={this.btnData.bind(this,'pre')}/>
                        </PaginationItem>
                        
                            {
                                this.page.map((item)=>{
                                    return (
                                        <PaginationItem key={item}>
                                        <PaginationLink href="#" data-currntpage={item}  onClick={this.changeData}>
                                            {item}
                                        </PaginationLink>
                                        </PaginationItem>
                                    )
                                }
                                )
                            }
                        
                        <PaginationItem>
                            <PaginationLink last href="#" onClick={this.btnData.bind(this,'next')}/>
                        </PaginationItem>
                    </Pagination>
                </div>
                {this.state.show &&
                    <div className='form' >
                        <Form style={{ "color": "black" }}>

                            <FormGroup row>
                                <Label for="example" sm={2}>姓名</Label>
                                <Col sm={10}>
                                    <Input type="text" id="example" value={this.state.name}  onChange={this.nameChange} placeholder="输入姓名" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="examplePassword" sm={2}>密码</Label>
                                <Col sm={10}>
                                    <Input type="text" id="examplePassword" value={this.state.password} onChange={this.passwordChange} placeholder="输入密码" />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button color="success" style={{ "marginRight": "30px" }} onClick={this.submitAdmin} >确认</Button>
                                    <Button type='reset' onClick={() => this.cancel()}>取消</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        adminList: state.data,
        count:state.count,
    };
}

export default connect(mapStateToProps, { fetchAPI, addAPI,deleteAPI,updataAPI,fetchAPICount })(Admin);