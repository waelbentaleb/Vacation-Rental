import React from 'react';

import 'antd/dist/antd.css';

import { Form, Input, InputNumber, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const HomeModalContent = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div>

            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['user', 'Referance']}
                    label="Referance"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'Region']}
                    label="Region   "
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'Type']}
                    label="Type"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name={['user', 'Prix']}
                    label="Prix"
                    rules={[
                        {
                            type: 'number',
                            min: 0,

                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item name={['user', 'introduction']} label="Description">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    {/* <Button type="primary" htmlType="submit">
                        Valider
        </Button> */}
                </Form.Item>
            </Form>
        </div>
    );
};
export default HomeModalContent;