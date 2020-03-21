import React, { Component } from 'react';
import { Form, FormGroup, Button, Col, Input } from 'reactstrap';
import './Chat.css';
class Chat extends Component {
    cancel(event){
        event.preventDefault()
    }
    render() {
        return (
            <div className='chat'>
                <div className='chat-list'>
                    <div className='chat-item chat-item-active'>
                        <div className='img'><div className='note'></div></div>
                        <div style={{ "width": "170px"}}>
                            <div>哥斯拉</div>
                            <div className='sm-font'>吃饭了没吃饭了没吃饭了没吃饭了没吃饭了没</div>
                        </div>
                    </div>
                    <div className='chat-item'>
                        <div className='img'><div className='note'></div></div>
                        <div style={{ "width": "170px"}}>
                            <div>哥斯拉</div>
                            <div className='sm-font'>吃饭了没吃饭了没吃饭了没吃饭了没吃饭了没</div>
                        </div>
                    </div>
                </div>
                <div className='chat-content'>
                    <div className='user-name'>用户名称</div>
                    <div>
                        <div className="word-list">
                            <div className="word">
                                <img></img>
                                <div className="word-line">
                                    <div className="word-content">你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊</div>
                                </div>
                            </div>
                            <div className="word right">
                                <img></img>
                                <div className="word-line word-line-right">
                                    <div className="word-content word-content-right">你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='editText'>
                        <Form>
                            <FormGroup row >
                                <Col sm={10} id='bottom-box'>
                                    <Input type="textarea" name="text" id="exampleText" style={{"height":"100px"}} />
                                    <Button size='sm' id='send' color='secondary' onClick={this.cancel}>发送</Button>
                                </Col>
                                
                            </FormGroup>
                            
                        </Form>
                    </div>
                </div>
            </div >
        );
    }
}

export default Chat;