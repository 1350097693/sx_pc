import React, { Component } from 'react';
import './Categories.css'
import { Table, Button, Breadcrumb, BreadcrumbItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { fetchAPI, addAPI, deleteAPI, updataAPI, fetchAPICount } from '../../../../redux/action.js';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            name: '',
            memo: '',
            id:'',
            type:'add',
        }
        this.page=[1]
        this.currntPage=0
        this.addCategories = this.addCategories.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.memoChange = this.memoChange.bind(this)
        this.submitCategories = this.submitCategories.bind(this)
        this.deleteCategories= this.deleteCategories.bind(this)
        this.updataCategories = this.updataCategories.bind(this)
        this.changeData = this.changeData.bind(this)
    }
    componentDidMount() {
        this.updata()
    }
    updata() {
        this.props.fetchAPI('/categories', { "currntPage": this.currntPage })
        this.props.fetchAPICount('/categoriesCount')
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
    submitCategories(e) {
        e.preventDefault();
        let { name, memo, id } = this.state
        if (this.state.type === 'add') {
            this.props.addAPI('/addCategories', { name, memo })

        } else if (this.state.type === 'updata') {
            this.props.updataAPI('/updataCategories', { name, memo, id })
        }
        this.setState({
            show: false
        })
        this.updata()

    }
    deleteCategories(e){
        this.props.deleteAPI('/deleteCategories',{Id:e.target.id})
        this.updata()
    }
    nameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    memoChange(e) {
        this.setState({
            memo: e.target.value
        });
    }
    addCategories() {
        this.setState({
            show: true,
            type: 'add',
            name: '',
            memo: '',
        })
    }
    updataCategories(e){
        this.setState({
            show: true,
            name:e.target.getAttribute("data-name"),
            memo:e.target.getAttribute("data-memo"),
            id:e.target.id,
            type:'updata',
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
                    <BreadcrumbItem active>分类管理</BreadcrumbItem>
                </Breadcrumb>
                <div className="conntent">
                    <Button color="success" onClick={this.addCategories}>添加分类</Button>
                    <div className='user-list'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>分类编号</th>
                                    <th>分类名</th>
                                    <th>描述</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.props.categoriesList && this.props.categoriesList.map((item) => {
                                        return (
                                            <tr key={item.categoryId}>
                                                <td>{item.categoryId}</td>
                                                <td>{item.name}</td>
                                                <td>{item.memo}</td>
                                                <td>
                                                    <Button color="success"  size="sm" id={item.categoryId} data-name={item.name} data-memo={item.memo} onClick={this.updataCategories} style={{ "marginRight": "10px" }}>修改</Button>
                                                    <Button color="danger" size="sm" id={item.categoryId} onClick={this.deleteCategories}>删除</Button>
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
                            <PaginationLink previous href="#" onClick={this.btnData.bind(this,'pre')}/>
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
                            <PaginationLink next href="#" onClick={this.btnData.bind(this,'next')} />
                        </PaginationItem>

                    </Pagination>
                </div>
                {this.state.show &&
                    <div className='form' >
                        <Form style={{ "color": "black" }}>
                            <FormGroup row>
                                <Label for="exampleName" sm={2}>分类名</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.name} onChange={this.nameChange} id="name" placeholder="输入分类名称" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleName" sm={2}>描述</Label>
                                <Col sm={10}>
                                    <Input type="textarea" value={this.state.memo} onChange={this.memoChange} name="name" id="name" placeholder="输入描述" />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button color="success" style={{ "marginRight": "30px" }} onClick={this.submitCategories}>确认</Button>
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
        categoriesList: state.data,
        count: state.count,
    };
}

export default connect(mapStateToProps, { fetchAPI, addAPI, deleteAPI, updataAPI, fetchAPICount })(Categories); 