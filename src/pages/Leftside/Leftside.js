import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Leftside.css';
import {switchRight,fetchAPI} from '../../redux/action' ;

class Leftside extends Component {
    constructor(props){
        super(props);
        this.state ={
            active:"Admin"
        }
    }
    changeRight (rightType){
        this.props.switchRight(rightType)
        this.setState({
            active:rightType
        })
    }
    render() {
        return (
            <div className='leftside'>
                <div className={this.state.active==='Admin'?'list-item list-item-active':'list-item'} onClick={() =>this.changeRight('Admin')}>
                    管理员列表
                </div>
                <div className={this.state.active==='Chat'?'list-item list-item-active':'list-item'} onClick={() =>this.changeRight('Chat')}>用户管理</div>
                <div className={this.state.active==='Goods'?'list-item list-item-active':'list-item'} onClick={() =>this.changeRight('Goods')}>商品管理</div>
                <div className={this.state.active==='Categories'?'list-item list-item-active':'list-item'} onClick={() =>this.changeRight('Categories')}>分类管理</div>
                <div className={this.state.active==='Order'?'list-item list-item-active':'list-item'} onClick={() =>this.changeRight('Order')}>订单管理</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
   
    return {
        rightType: state.rightType
    };
}
// const mapDispatchToProps = dispatch => ({
//     switchRight:type =>dispatch(switchRight(type))
// })
export default connect(mapStateToProps,{switchRight,fetchAPI})(Leftside);