import React, { Component } from 'react';
import './Goods.css'
import { Table, Button, Breadcrumb, BreadcrumbItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { fetchAPI, addAPI, deleteAPI, updataAPI, fetchAPICount } from '../../../../redux/action.js';

class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            categoryId: '',
            name: '',
            cost:'',
            memo:'',
            url:'',
            id: '',
            type: 'add',

        }
        this.page = [1]
        this.currntPage = 0
        this.addProducts = this.addProducts.bind(this)
        this.nameChange = this.nameChange.bind(this)
        this.memoChange = this.memoChange.bind(this)
        this.urlChange = this.urlChange.bind(this)
        this.categoryIdChange = this.categoryIdChange.bind(this)
        this.costChange = this.costChange.bind(this)
        this.submitProducts = this.submitProducts.bind(this)
        this.deleteProducts = this.deleteProducts.bind(this)
        this.updataProducts = this.updataProducts.bind(this)
        this.changeData = this.changeData.bind(this)

    }
    componentDidMount() {
        this.updata()
    }
    updata() {
        this.props.fetchAPI('/products', { "currntPage": this.currntPage })
         this.props.fetchAPICount('/ProductsCount')
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
    submitProducts(e) {
        e.preventDefault();
        let { name, cost, id,memo,url,categoryId } = this.state
        if (this.state.type === 'add') {
            this.props.addAPI('/addProducts', { name, cost,memo,url,categoryId })

        } else if (this.state.type === 'updata') {
            this.props.updataAPI('/updataProducts', { name, cost, id,memo,url,categoryId })
        }
        this.setState({
            show: false
        })
        this.updata()

    }
    deleteProducts(e){
        this.props.deleteAPI('/deleteProducts',{Id:e.target.id})
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
    urlChange(e) {
        this.setState({
            url: e.target.value
        });
    }
    categoryIdChange(e) {
        this.setState({
            categoryId: e.target.value
        });
    }
    costChange(e) {
        this.setState({
            cost: e.target.value
        });
    }
    addProducts() {
        this.setState({
            show: true,
            type: 'add',
            categoryId: '',
            name: '',
            cost:'',
            memo:'',
            url:'',
            id: '',
        })
    }
    updataProducts(e){
        this.setState({
            show: true,
            name:e.target.getAttribute("data-pname"),
            cost:e.target.getAttribute("data-cost"),
            memo:e.target.getAttribute("data-memo"),
            url:e.target.getAttribute("data-purl"),
            categoryId:e.target.getAttribute("data-categoryId"),
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
                    <BreadcrumbItem active>商品管理</BreadcrumbItem>
                </Breadcrumb>
                <div className="conntent">
                    <Button color="success" onClick={this.addProducts}>添加商品</Button>
                    <div className='user-list'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Pid</th>
                                    <th>分类id</th>
                                    <th>商品名</th>
                                    <th>图片url</th>
                                    <th>价格</th>
                                    <th>描述</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.productsList && this.props.productsList.map((item) => {
                                        return (
                                            <tr key={item.pId}>
                                                <td>{item.pId}</td>
                                                <td>{item.categoryId}</td>
                                                <td>{item.pName}</td>
                                                <td >{item.pUrl}</td>
                                                <td>{item.cost}</td>
                                                <td>{item.memo}</td>
                                                <td>
                                                    <Button color="success" 
                                                    id={item.pId} data-categoryid={item.categoryId} data-pname={item.pName} data-cost={item.cost}
                                                    data-purl={item.pUrl} data-memo={item.memo}
                                                    size="sm" onClick={this.updataProducts} style={{ "marginRight": "10px" }}>修改</Button>
                                                    <Button color="danger" size="sm" id={item.pId} onClick={this.deleteProducts}>删除</Button>
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
                                <Label for="exampleName" sm={2}>分类id</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.categoryId} onChange={this.categoryIdChange} name="name"  placeholder="输入分类id" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleName" sm={2}>商品名</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.name} onChange={this.nameChange} name="name2"  placeholder="输入商品名" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleName" sm={2}>图片url</Label>
                                <Col sm={10}>
                                    <Input type="text" value={this.state.url} onChange={this.urlChange} name="name3"  placeholder="输入图片url" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="text" sm={2}>价格</Label>
                                <Col sm={10}>
                                    <Input type="number" value={this.state.cost} onChange={this.costChange} name="text"  placeholder="输入价格" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="text" sm={2}>描述</Label>
                                <Col sm={10}>
                                    <Input type="number"  value={this.state.memo} onChange={this.memoChange} name="text1"  placeholder="输入描述" />
                                </Col>
                            </FormGroup>
                            {/* <FormGroup row>
                                <Label for="exampleSelect" sm={2}>商品分类</Label>
                                <Col sm={10}>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </Col>
                            </FormGroup> */}
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button color="success" style={{ "marginRight": "30px" }} type='submit' onClick={this.submitProducts}>确认</Button>
                                    <Button type='reset' onClick={()=>this.cancel()}>取消</Button>
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
        productsList: state.data,
        count: state.count,
    };
}

export default connect(mapStateToProps, { fetchAPI, addAPI, deleteAPI, updataAPI, fetchAPICount })(Goods);