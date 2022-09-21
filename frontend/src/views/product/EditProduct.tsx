import { useState } from 'react';
import { Card, Col, Row, Table, Form, Divider,  } from 'antd';
import { Button, Input, } from "antd";

import { Select } from 'antd';
import { Modal } from 'antd';
import { Link, useParams } from "react-router-dom";
import { PageHeader } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Option } = Select;
const { TextArea } = Input;

const showDeleteConfirm = () =>{
    confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'โปรดตรวจสอบข้อมูลก่อนทำการลบข้อมูล',
      okText: 'ลบข้อมูล',
      okType: 'danger',
      cancelText: 'ยกเลิก',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

const EditProduct = () => {
    const value = () => console.log();
    const propertyId = useParams<any>()
    const [isModalVisible, setIsModalVisible] = useState(false);
    console.log(propertyId.product)
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleChange = () => {
        console.log(`selected ${value}`);
    }


    return (
        <div className="productCreate">
            <PageHeader
                ghost={false}
                title="แก้ไขข้อมูลสินค้า"
                onBack={() => window.history.back()}
                extra={[
                    <Button key="1" type="primary" onClick={showDeleteConfirm} danger>
                        ลบ
                    </Button>,
                    <Button key="2" type="primary">
                        บันทึก
                    </Button>,
                ]}>
                <Divider style={{ margin: "-2px 0px 10px 0px" }} />
                <Row gutter={6}>
                    <Col span={12}>
                        <Card bordered={false} >
                            <Card type="inner" title="รายละเอียดสินค้า" >
                                <Row gutter={16}>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Input placeholder="รหัสสินค้า" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Input placeholder="ชื่อสินค้า" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Input placeholder="PartNumber" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Input placeholder="จำนวนคงเหลือ" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Input placeholder="ราคาซื้อ (ต่อหน่อย)" suffix="บาท" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Input placeholder="ราคาขาย (ต่อหน่อย)" suffix="บาท" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Select defaultValue="หน่วยนับ" onChange={handleChange}>
                                                <Option value="jack">ชิ้น</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Input placeholder="ลิมิตสินค้า" />
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Select defaultValue="เกรดสินค้า" onChange={handleChange}>
                                                <Option value="jack">1</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Select defaultValue="หมวดหมู่สินค้า 1" onChange={handleChange}>
                                                <Option value="jack">1</Option>
                                                <Option value="jack">2</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Select defaultValue="หมวดหมู่สินค้า 2" onChange={handleChange}>
                                                <Option value="jack">1</Option>
                                                <Option value="jack">2</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Item >
                                            <Select defaultValue="หมวดหมู่สินค้า 3" onChange={handleChange}>
                                                <Option value="jack">1</Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col md={24}>
                                        <Form.Item >
                                            <TextArea rows={1} placeholder="หมายเหตุ" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card bordered={false} >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Card type="inner" title="รายละเอียดรถที่ใช้" >
                                        <Row gutter={16}>
                                            <Col md={24}>
                                                <Form.Item >
                                                    <Select defaultValue="ยี่ห้อรถ"
                                                        onChange={handleChange}>
                                                        <Option value="jack">1</Option>
                                                    </Select>
                                                </Form.Item >
                                            </Col>
                                            <Col md={24}>
                                                <Form.Item >
                                                    <Select defaultValue="โมเดลรถ"
                                                        onChange={handleChange}>
                                                        <Option value="jack">1</Option>
                                                    </Select>
                                                </Form.Item >
                                            </Col>
                                            <Col md={24}>
                                                <Form.Item >
                                                    <TextArea rows={1} placeholder="หมายเหตุ" />
                                                </Form.Item >
                                            </Col>

                                        </Row>
                                    </Card>
                                </Col>

                                <Col span={12}>
                                    <Card type="inner" title="รายละเอียดที่จัดเก็บ" >
                                        <Row gutter={16}>
                                            <Col md={24}>
                                                <Form.Item >
                                                    <Select defaultValue="โซน" onChange={handleChange}>
                                                        <Option value="jack">1</Option>
                                                    </Select>
                                                </Form.Item >
                                            </Col>
                                            <Col md={24}>
                                                <Form.Item >
                                                    <Input placeholder="ตู้" />
                                                </Form.Item >
                                            </Col>
                                            <Col md={24}>
                                                <Form.Item >
                                                    <Input placeholder="ชั้น" />
                                                </Form.Item >
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>

                            <div style={{ margin: '16px 0' }} />
                            <Card type="inner"
                                title="บริษัทที่จำหน่าย"
                                extra={
                                    <Button 
                                    size="small"
                                    style={{
                                        backgroundColor: "#87e8de",
                                        color: "black",
                                        borderRadius: "5px",
                                      }}
                                    onClick={showModal}>
                                        เพิ่มบริษัท
                                    </Button>}
                            >
                                <Modal title="บริษัทที่หน่าย"
                                    visible={isModalVisible}
                                    onOk={handleOk} onCancel={handleCancel}>
                                    <Form.Item  >
                                        <Select defaultValue="บริษัทที่จำหน่าย"                                      
                                            onChange={handleChange}>
                                            <Option value="jack">บริษัท B</Option>
                                        </Select>
                                    </Form.Item>
                                </Modal>
                                <Table size="small"
                                    columns={[
                                        { title: 'ชื่อบริษัท', dataIndex: 'name' },
                                        { title: 'รหัสสินค้า(บริษัท)', dataIndex: 'code' },
                                        { title: 'ชื่อสินค้า(บริษัท)', dataIndex: 'codecom' },
                                    ]}
                                    dataSource={[
                                        {
                                            name: 'John Brown',
                                            code: 32,
                                            codecom: "บริษัท A",
                                        },
                                    ]}
                                />

                            </Card>
                        </Card>
                    </Col>
                </Row>
            </PageHeader>
        </div>
    )
}
export default EditProduct;