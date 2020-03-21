import React, { Component } from 'react';
import { Table, Button, Breadcrumb, BreadcrumbItem, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './Order.css'
class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <div className='user'>
                <Breadcrumb>
                    <BreadcrumbItem><a href="#">首页</a></BreadcrumbItem>
                    <BreadcrumbItem active>订单管理</BreadcrumbItem>
                </Breadcrumb>
                <div className="conntent">
                    <div className='user-list'>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>订单id</th>
                                    <th>用户id</th>
                                    <th>下单时间</th>
                                    <th>收货地址</th>
                                    <th>是否受理</th>
                                    <th>是否受理</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>
                                        <Button color="success" size="sm" style={{ "marginRight": "10px" }}>受理</Button>
                                        <Button color="warning" size="sm">订单详情</Button>
                                    </td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                3
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                4
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                5
        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        );
    }
}

export default Order;