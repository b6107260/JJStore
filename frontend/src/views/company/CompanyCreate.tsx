import { useState } from 'react';
import { Card, Col, Row, Form, Divider, Space } from 'antd';
import { Button, Input, } from "antd";

import { Select } from 'antd';
import { PageHeader } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



const { Option } = Select;
const { TextArea } = Input;

const CompanyCreate = () => {
    const value = () => console.log();
    const values = () => console.log();
    const handleChange = () => console.log(`selected ${value}`);

    const onFinish = () => {
        console.log('Received values of form:', values);
    };

    return (
        <div className="companyCreate">
            <PageHeader
                ghost={false}
                title="ข้อมูลบริษัทสั่งซื้อ"
                onBack={() => window.history.back()}
                extra={[
                    <Button key="1" type="primary">
                        บันทึก
                    </Button>,
                ]}>
                <Divider style={{ margin: "-2px 0px 20px 0px" }} />
                <Card style={{ backgroundColor: "#f5f5f5",  margin: "30px 100px 10px 100px"   }}>
                    <Row gutter={16}>
                        <Col md={12}>
                            <Form.Item label="ชื่อบริษัท">
                                <Input  />
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label="ชื่อย่อ">
                                <Input  />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="ชื่อบริษัทภาษาอังกฤษ">
                        <Input  />
                    </Form.Item>

                    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                        <Form.List name="users">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} align="baseline">

                                            <Form.Item
                                                label="ชื่อตัวแทน"
                                                {...restField}
                                                name={[name, 'first']}                                           
                                            >
                                                <Input  />
                                            </Form.Item>

                                            <Row gutter={16}>
                                                <Col md={12}>
                                                    <Form.Item
                                                        label="Tel."
                                                        {...restField}
                                                        name={[name, 'tel']}
                                                    >
                                                        <Input  />
                                                    </Form.Item>
                                                </Col>
                                                <Col md={12}>
                                                    <Form.Item
                                                        label="Line ID"
                                                        {...restField}
                                                        name={[name, 'line']}
                                                    >
                                                        <Input  />
                                                    </Form.Item>
                                                </Col>
                                            </Row>

                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            เพิ่มชื่อตัวแทน
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form>

                    <Form.Item label="ที่อยู่บริษัท">
                        <TextArea rows={1}  />
                    </Form.Item>

                    <Row gutter={16}>
                        <Col md={12}>
                            <Form.Item label="ตำบล">
                                <Select  onChange={handleChange}>
                                    <Option value="jack">ชิ้น</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label="อำเภอ" >
                                <Select  onChange={handleChange}>
                                    <Option value="jack">ชิ้น</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={12}>
                            <Form.Item label="จังหวัด">
                                <Select  onChange={handleChange}>
                                    <Option value="1">1</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col md={12}>
                            <Form.Item label="รหัสไปรษณีย์">
                                <Select  onChange={handleChange}>
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={12}>
                        <Col md={8}>
                            <Form.Item label="Tel">
                            <Input />
                            </Form.Item>
                        </Col>
                        <Col md={8}>
                            <Form.Item label="Line ID" >
                            <Input  />
                            </Form.Item>
                        </Col>
                        <Col md={8}>
                            <Form.Item label="Email" >
                            <Input  />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                        <Form.List name="bank">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, ...restField }) => (
                                        <Space key={key} align="baseline">
                                            <Form.Item
                                                label="หมายเลขบัญชีโอนเงิน"
                                                {...restField}
                                                name={[name, 'number']}
                                            >
                                                <Input  />
                                            </Form.Item>

                                            <Row gutter={16}>
                                                <Col md={12}>
                                                    <Form.Item
                                                        label="ธนาคาร"
                                                        {...restField}
                                                        name={[name, 'bank']}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                </Col>
                                                <Col md={12}>
                                                    <Form.Item
                                                        label="ชื่อบัญชี"
                                                        {...restField}
                                                        name={[name, 'namebank']}
                                                    >
                                                        <Input  />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    ))}
                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                            เพิ่มบัญชีโอนเงิน
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                    </Form>
                </Card>
            </PageHeader>
        </div>
    )
}
export default CompanyCreate;