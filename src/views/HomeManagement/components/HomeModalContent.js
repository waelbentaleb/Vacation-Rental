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
    }
}
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
}

/* eslint-enable no-template-curly-in-string */

function HomeModalContent(props) {

    return (
        <div>

            <Form {...layout} name="nest-messages" onFinish={props.onAddHome} validateMessages={validateMessages}>
                <Form.Item name='referance' label="Referance">
                    <Input />
                </Form.Item>

                <Form.Item name="region" label="Region">
                    <Input />
                </Form.Item>

                <Form.Item name="type" label="Type">
                    <Input />
                </Form.Item>

                <Form.Item name='price' label="Price">
                    <InputNumber />
                </Form.Item>

                <Form.Item name='description' label="Description">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Valider
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};


export default HomeModalContent;