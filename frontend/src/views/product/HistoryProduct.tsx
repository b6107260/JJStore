/*
import { Button,  Input,  Divider, } from "antd";
import { Table, Select, DatePicker } from 'antd';
import { useState } from "react";
import { PageHeader } from 'antd';


const { Option } = Select;
const columns = [
  { title: 'วันที่', dataIndex: 'date', key: 'date', },
  { title: 'เวลา', dataIndex: 'time', key: 'time', },
  { title: 'ชื่อ User', dataIndex: 'name', key: 'name', },
  { title: 'สถานะ', dataIndex: 'status', key: 'status', },
  { title: 'สินค้า', dataIndex: 'product', key: 'product', },
];

const data = [
  {
    key: '1',
    date: '2022-02-19',
    time: '8.00',
    name: "1234",
    status: 'ลบ',
    product: 'กรองโซล่า S.KBD-Z #8984',
  },
  {
    key: '1',
    date: '2022-02-20',
    time: '9.30',
    name: "1234",
    status: 'ลบ',
    product: 'กรองโซล่า S.KBD-Z #8984',
  },
  {
    key: '1',
    date: '2022-02-21',
    time: '11.00',
    name: "1234",
    status: 'เพิ่ม',
    product: 'กรองโซล่า S.KBD-Z #8984',
  },
];

const HistoryProduct = () => {
  const [result, setResult] = useState<any>(data);
  
  
    
  

  const onSearch = (value: any) => {
    const res = data.filter(
      (Item) => {
        const word = value || ""
        return Item.date.toUpperCase().includes(word.toUpperCase()) ||
          Item.name.toUpperCase().includes(word.toUpperCase())
      }
    );
    setResult(res);
  };


  return (
    <div className="historyproduct">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="ประวัติการจัดกการสินค้า"
      >
        <Divider style={{ margin: "-2px 0px 30px 0px" }} />
        
        <Input
          style={{
            width: "20%",
            marginRight: 10,
            borderRadius: "5px",
          }}
          placeholder="ชื่อสินค้า"
        />
        <DatePicker
          style={{
            width: "20%",
            borderRadius: "5px"
          }} />
        <Select
          defaultValue="สถานะ"
          style={{
            width: "20%",
            marginLeft: 8,
            marginRight: 10,
            borderRadius: "5px",
          }} >
          <Option value="jack">ชิ้น</Option>
        </Select>

        <Button type="primary" htmlType="submit">
          ค้นหา
        </Button>
        
          <Button
            style={{
              float: "right",
              width: "7%",
              backgroundColor: "#EE7C58",
              color: "white",
            }}
            type="primary"      
          >
            ลบ
          </Button>
  

        <Table
          style={{
            marginTop: 40,
            borderRadius: "5px",
          }} 
          columns={columns} dataSource={result} />

      </PageHeader>
    </div>
  )
};

export default HistoryProduct;*/

import { Button, Input, Divider, Form, Row, Col } from "antd";
import { Table, Select,  } from 'antd';
import { useState } from "react";
import { PageHeader } from 'antd';
import { DatePicker } from "@components/replace-moment";
import dayjs from "dayjs";

const { Option } = Select;
const columns = [
  { title: 'วันที่', dataIndex: 'date', key: 'date', },
  { title: 'ชื่อ User', dataIndex: 'name', key: 'name', },
  { title: 'สถานะ', dataIndex: 'status', key: 'status', },
  { title: 'สินค้า', dataIndex: 'product', key: 'product', },
];

const data = [
  {
    key: '1',
    date: "2022-02-12",
    name: 'นายขอ',
    status: 'ลบ',
    product: 'กรองโซล่า S.KBD-Z #8984',
  },
  {
    key: '2',
    date: "2022-03-16",
    name: 'นายกอ',
    status: 'เพิ่ม',
    product: 'อะไหล่รถ',
  },

];



const HistoryProduct = () => {
  const [result, setResult] = useState<any>(data);
  const [selectedRowKeys, setRowKeys] = useState([]);
  const [form] = Form.useForm()

  const onFinish = (value: any) => {
    console.log(dayjs(value.date).format('YYYY-MM-DD'));
    const res = data.filter(
      (Item) => {
        const product = value.product || ""
        const status = value.status || ""
        const date = value.date?dayjs(value.date).format('YYYY-MM-DD') : ""
        console.log(product);
        return Item.product.toUpperCase().includes(product.toUpperCase()) &&
        Item.status.toUpperCase().includes(status.toUpperCase()) &&
        Item.date.includes(date)
      }
    );
    setResult(res);
  };


  const start = () => {
    setRowKeys([]);
  };

  const onSelectChange = (selectedRowKeys: any) => {
    setRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const refresh = () => {
    setResult(data)
    form.resetFields()
  }

  return (
    <div className="historyproduct">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="ประวัติการจัดกการสินค้า"
        extra={[
          <Button style={{
            backgroundColor: "#EE7C58",
            color: "white",
          }}
            type="primary"
            onClick={start}
          >
            ลบ
          </Button>,
        ]}
      >
        <Divider style={{ margin: "-2px 0px 30px 0px" }} />

        <Form onFinish={onFinish} form={form} layout="vertical">
          <Row gutter={16}>
            <Col md={6}>
              <Form.Item name="product">
                <Input
                  allowClear
                  style={{

                    borderRadius: "5px",
                  }}
                  placeholder="ชื่อสินค้า"
                />
              </Form.Item>
            </Col>

            <Col md={6}>
              <Form.Item name="date">
                <DatePicker
                  style={{

                    borderRadius: "5px"
                  }} />
              </Form.Item>
            </Col>

            <Col md={6}>
              <Form.Item name="status">
                <Select       
                  placeholder="สถานะ"
                  allowClear
                >
                  <Option value="ลบ">ลบ</Option>
                  <Option value="เพิ่ม">เพิ่ม</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col md={3}>
              <Form.Item >
                <Button type="primary" htmlType="submit" >
                  ค้นหา
                </Button>
              </Form.Item>
            </Col>

            <Col md={3}>
              <Form.Item >
                <Button type="primary" onClick={refresh} >
                  ล้าง
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Table
          style={{
            marginTop: 20,
            borderRadius: "5px",
          }}
          columns={columns} dataSource={result} rowSelection={rowSelection} />

      </PageHeader>
    </div>
  )
};

export default HistoryProduct;



