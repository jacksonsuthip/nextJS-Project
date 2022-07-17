import LoginHeader from "../../components/SignupLogin/loginheader";
import { Button, Form, Input, Card, Row, Col } from 'antd';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function LogIn() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div >
            <LoginHeader />
            <Row>
                <Col span={7}></Col>
                <Col span={10}>
                    <Card
                        title="Login"
                        style={{ margin: "20% 0%", }}
                    >
                        <Form
                            name="normal_login"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Row>
                                <Col span={6}></Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Username!',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined />} placeholder="Username" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Password!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            prefix={<LockOutlined />}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" >
                                            Log in
                                        </Button>
                                        &nbsp;&nbsp;Or&nbsp;&nbsp;
                                        <Link href="/SignUp-LogIn/signup">register now!</Link>
                                    </Form.Item>
                                </Col>
                                <Col span={6}></Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
                <Col span={7}></Col>
            </Row>
        </div>
    )
}
