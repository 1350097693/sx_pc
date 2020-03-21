import React, { Component } from 'react';
import './Rightside.css';
import Admin from './componets/Admin/Admin'
import Goods from './componets/Goods/Goods'
import Chat from './componets/Chat/Chat'
import Order from './componets/Order/Order'
import Categories from './componets/Categories/Categories'
import { connect } from 'react-redux'

class Rightside extends Component {

    
    render() {
        return (
            <div className='rightside'>
                {(() => {
                    switch (this.props.rightType) {
                        case 'Chat':
                            return <Chat />
                        case 'Goods':
                            return <Goods />
                        case 'Order':
                            return <Order />
                        case 'Categories':
                            return <Categories />
                        default:
                            return <Admin />
                    }
                })()}
            </div>
        );
    }
}
function mapStateToProps(state) {
     console.log(state)
    return {
        rightType: state.rightType
    };
}
// const mapDispatchToProps = dispatch => ({

// })
export default connect(mapStateToProps)(Rightside);