import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import { blue } from '@mui/material/colors';
function Comment() {
    const layout = {
        // labelCol: { span: 4 },
        wrapperCol: { span: 23},
  
    };

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


    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                className='w-full'
                validateMessages={validateMessages}
            >
                  <h1 className='text-yellow-600 text-left font-bold lg:text-4xl text-3xl px-4  py-8'>Add Comment </h1>
                <div className='flex flex-col md:flex-row px-4 w-full'>
                    <Form.Item name={'name'}  rules={[{ required: true }]} style={{ flex: '1' }} >
                        <Input placeholder='userName' style={{padding:'0.8rem 0.5rem'}}/>
                    </Form.Item>
                    <Form.Item name={'email'}  rules={[{ type: 'email' }]} style={{ flex: '1' }}>
                        <Input placeholder='Email' style={{padding:'0.8rem 0.5rem'}}/>
                    </Form.Item>
                </div>
                <div className='flex  w-full px-4'>
                    <Form.Item name={'introduction'} className='w-full'>
                        <Input.TextArea placeholder='description' style={{padding:'0.8rem 0.5rem'}} />
                    </Form.Item>
               
                </div>
                <Form.Item >
                    <Button type="primary" htmlType="submit" className='btn-submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
       
    )
}

export default Comment