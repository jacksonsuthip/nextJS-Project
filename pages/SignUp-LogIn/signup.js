import LoginHeader from "../../components/SignupLogin/loginheader";
import { Button, Form, Input, Card, Row, Col, DatePicker } from 'antd';

export default function Postitem() {
    const onFinish = (values) => {
        console.log('Success:', values.date.format('YYYY-MM-DD'));
    };

    return (
        <div >
            <LoginHeader />
            <Row>
                <Col span={7}></Col>
                <Col span={10}>
                    <Card
                        title="SignUp"
                        style={{
                            margin: "20% 0%",
                        }}
                    >
                        <Form
                            name="normal_login"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 10 }}
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Ph. No"
                                name="phno"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Phone Number!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Date" name="date">
                                <DatePicker />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{ offset: 9 }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>

                        </Form>
                    </Card>
                </Col>
                <Col span={7}></Col>
            </Row>

        </div>
    )
}
