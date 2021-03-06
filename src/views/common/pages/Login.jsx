// '登录' 页面
import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import styled   from 'styled-components'
import elf      from '../../../elf/main'

const FormItem = Form.Item

// 样式 -start
const LoginBox = styled.div`
    height: 100%;
    ${elf.m.flexCenter()};
`

const LoginForm = styled.div`
    width: 320px;
    height: 340px;
    padding: 36px;
    box-shadow: 0 0 100px rgba(0,0,0,.08);
    background: #fff;
`

const LoginTitle = styled.h2`
    font-size: ${elf.f.title}px;
    text-align: center;
    padding-bottom: ${elf.d.autoPadding};
`
// 样式 - end

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values)
            }
        })
    }

    render () {
        const { getFieldDecorator } = this.props.form
        return (
            <LoginBox>
                <LoginForm>
                    <LoginTitle>
                        <span>长江中心 - 物业管理系统</span>
                    </LoginTitle>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{
                                    required: true,
                                    message: '请输入用户名!'
                                }]
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: '请输入密码!'
                                }]
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float: 'right'}}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </LoginForm>
            </LoginBox>
        )
    }
}

export default Form.create()(Login)
