import { Button, Input, Divider, } from "antd";
import { Table, Space } from 'antd';
import { useState } from "react";
import { Link } from "react-router-dom";
import { EditTwoTone, EyeTwoTone, PlusCircleOutlined } from "@ant-design/icons";
import { PageHeader } from 'antd';
import { useEffect } from "react";
import React from "react";
// import { URLSERVER2 } from "@constant1/server";
import { GET_PRODUCT } from "../../service/api/product";
import { IProdctGET } from "@service/interface/product";


const { Search } = Input;

const Product = () => {
  const [products, setProducts] = React.useState<IProdctGET[]>([]);
  const [result, setResult] = useState<IProdctGET[]>([]);

  const getProducts = async () => {
    try {
      const res = await GET_PRODUCT()
      if (res.status === 200) {
        setProducts(res.result)
        setResult(res.result)
        console.log(res)
      }
    } catch (error) {

    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const columns = [
    { title: 'รหัสสินค้า', dataIndex: 'code', key: 'code',
      render: (code: any) => (
        <>
          {code?.jjCodeNumber}
        </>
      ),
    },  
    { title: 'ชื่อสินค้า', dataIndex: 'name', key: 'name', },
    { title: 'เกรดสินค้า', dataIndex: 'product_grade', key: 'product_grade',
      render: (product_grade: any) => (
        <>
          {product_grade?.name}
        </>
      ),
    },   
    { title: 'จำนวน', dataIndex: 'amount', key: 'amount', }, 
    {  title: 'ตัวดำเนินการ', key: 'action',
      render: (_: any, item: IProdctGET) => (
        <Space >
          <Link to={`/edit-product/${item.id}`}>
          {/* <Button size="small" style={{backgroundColor: "#ffc53d",color: "black",}}>
            ดูข้อมูล
            </Button> */}    
          <EditTwoTone  twoToneColor="#ff7875" style={{fontSize: '20px'}}/>                     
          </Link>
            {/* <Button size="small" style={{backgroundColor: "#ff7875", color: "black",}}>
              แก้ไข
            </Button> */}                                                         
          <EyeTwoTone twoToneColor="#ffc53d" style={{fontSize: '20px'}}/>          
        </Space>
      ),
    },
  ];


  const onSearch = (value: any) => {
    console.log(value);
    const res = products.filter(item => {
      const word = value || ""
      console.log(word);

      // item.code.jjCodeNumber.toUpperCase().includes(word.toUpperCase()) ||
      return item.name.toUpperCase().includes(word.toUpperCase())
    });
    setResult(res);
  };


  return (
    <div className="Product">
      <PageHeader
        ghost={false}
        title="จัดการสินค้า"
      >
        <Divider style={{ margin: "-2px 0px 30px 0px" }} />
        <Search
          placeholder="ชื่อสินค้า | รหัสสินค้า"
          allowClear
          enterButton="ค้นหา"
          size="large"
          onSearch={onSearch}
          style={{ width: "40%", borderRadius: "10px" }} />

        <Space style={{ float: "right" }} size="middle">
          <Link to={"/product-create"}>
            <Button
              size="large"
              type="primary"
              icon={<PlusCircleOutlined />}>
              เพิ่มสินค้า
            </Button>
          </Link>
          <Link to={"/history-product"}>
            <Button
              size="large">
              ประวัติการจัดการ
            </Button>
          </Link>
        </Space>

        <Table
          style={{
            marginTop: 40,
            borderRadius: "5px",
          }} columns={columns} dataSource={result} 
        />

      </PageHeader>
    </div>
  )
};

export default Product;