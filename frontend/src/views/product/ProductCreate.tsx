import { Button, Card, Col, Divider, Form, Input, Modal, PageHeader, Row, Select, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { POST_PRODUCT } from '../../service/api/product';
import { GET_PRODUCT_COMPANY, POST_PRODUCT_COMPANY } from '@service/api/product_company';
import { GET_PRODUCT_GRADE } from '@service/api/product_grade';
import { GET_UNIT } from '@service/api/unit';
import { GET_CATEGORY_FR } from '@service/api/category_fr';
import { GET_CATEGORY_SEC } from '@service/api/category_sec';
import { GET_CATEGORY_TH } from '@service/api/category_th';
import { GET_STORAGE_FR } from '@service/api/storage_fr';
import { GET_STORAGE_SEC } from '@service/api/storage_sec';
import { GET_STORAGE_TH } from '@service/api/storage_th';
import { GET_CAR_BRAND } from '@service/api/car_brand';
import { GET_CAR_MODEL } from '@service/api/car_model';
import { GET_COMPANY } from '@service/api/company';
import { IProductCompanyGET } from '@service/interface/Product_Company';
// import { URLSERVER2 } from '@constant1/server';


const { Option } = Select;
const { TextArea } = Input;

const ProductCreate = () => {
    const [unit, setUnit] = useState<any>([]);
    const [productgrade, setProductGrade] = useState<any>([]);
    const [productcompany, setProductCompany] = useState<IProductCompanyGET[]>([]);
    const [categoryfr, setCategoryFr] = useState<any>([]);
    const [categorysec, setCategorySec] = useState<any>([]);
    const [categoryth, setCategoryTh] = useState<any>([]);
    const [storagefr, setStorageFr] = useState<any>([]);
    const [storagesec, setStorageSec] = useState<any>([]);
    const [storageth, setStorageTh] = useState<any>([]);
    const [carbrand, setCarBrand] = useState<any>([]);
    const [carmodel, setCarModel] = useState<any>([]);
    const [company, setCompany] = useState<any>([]);
    const [dataSource, setDataSource] = useState<IProductCompanyGET[]>([]);
    const [datacompany, setDataCompany] = useState<IProductCompanyGET[]>([]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const { goBack } = useHistory()

    useEffect(() => {
        getUnit();
        getProductGrade();
        getProductCompany();
        getCategoryFr();
        getCategorySec();
        getCategoryTh();
        getStorageFr();
        getStorageSec();
        getStorageTh();
        getCarBrand();
        getCarModel();
        getCompany();

    }, [])

    const showModal = () => {
        setIsModalVisible(true);
    };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    // };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleAdd = (value: any) => {
        setIsModalVisible(false);
        const newData = productcompany.filter(items => items.id === value.product_company);
        console.log("value", value)
        setDataSource(newData)
        console.log("newdata", newData)
        console.log("data", dataSource)
    };

    const onFinish = (value: any) => {
        console.log("value", value)

        const company = value || ""
        const res = productcompany.filter(
            (Item) => {
                console.log("Item", Item)
                return (company === Item.company?.id)
            }
        )
        setDataCompany(res)
            console.log("filter",datacompany)
    }

    // const saveProduct = async (value: any) => {
    //     console.log("this is value =>", value);
    //     const productdata = {
    //         product_storage: {
    //             storage_fr: value.storage_fr,
    //             storage_sec: value.storage_sec,
    //             storage_th: value.storage_th,
    //             // status: "Y"
    //         },
    //         amount: value.amount,
    //         category_fr: value.category_fr,
    //         category_sec: value.category_sec,
    //         category_th: value.category_th,
    //         jjCodeNumber: value.jjCodeNumber,
    //         limit_amount: value.limit_amount,
    //         name: value.name,
    //         partNumber: value.partNumber,
    //         price: value.price,
    //         price_sell: Number(value.price_sell),
    //         product_grade: value.product_grade,
    //         unit: value.unit,
    //         car_brand: value.car_brand,
    //         product_company: value.product_company

    //     }

    //     try {

    //         const res = await POST_PRODUCT(productdata)
    //         if (res.status === 200) {
    //             console.log(res)
    //             //do some thing
    //             //push('/login')
    //             goBack()
    //         }
    //     } catch (error) {
    //     }
    //     console.log("data", productdata)
    // }

    const saveProduct = async (value: any) => {
        console.log("this is value =>", value);
        const productdata = {
            product_company_name: value.product_company_name,
            code: value.code,
            products: value.product,
            company: value.company,

            product_storage: {
                storage_fr: value.storage_fr,
                storage_sec: value.storage_sec,
                storage_th: value.storage_th,
                // status: "Y"
            },
            amount: value.amount,
            category_fr: value.category_fr,
            category_sec: value.category_sec,
            category_th: value.category_th,
            jjCodeNumber: value.jjCodeNumber,
            limit_amount: value.limit_amount,
            name: value.name,
            partNumber: value.partNumber,
            price: value.price,
            price_sell: Number(value.price_sell),
            product_grade: value.product_grade,
            unit: value.unit,
            car_brand: value.car_brand,
        }

        try {

            const res = await POST_PRODUCT_COMPANY(productdata)
            if (res.status === 200) {
                console.log(res)
                //do some thing
                //push('/login')
                goBack()
            }
        } catch (error) {
        }
        console.log("data", productdata)
    }




    const getUnit = async () => {
        try {
            const res = await GET_UNIT()
            if (res.status === 200) {
                setUnit(res.result)

            }
        } catch (error) {
        }
    }

    const getProductGrade = async () => {
        try {
            const res = await GET_PRODUCT_GRADE()
            if (res.status === 200) {
                setProductGrade(res.result)

            }
        } catch (error) {
        }
    }

    const getProductCompany = async () => {
        try {
            const res = await GET_PRODUCT_COMPANY()
            if (res.status === 200) {
                setProductCompany(res.result)
                console.log("productcom",res)
            }
        } catch (error) {
        }
    }

    const getCompany = async () => {
        try {
            const res = await GET_COMPANY()
            if (res.status === 200) {
                setCompany(res.result)
            }
        } catch (error) {
        }
    }

    const getCategoryFr = async () => {
        try {
            const res = await GET_CATEGORY_FR()
            if (res.status === 200) {
                setCategoryFr(res.result)
            }
        } catch (error) {
        }
    }

    const getCategorySec = async () => {
        try {
            const res = await GET_CATEGORY_SEC()
            if (res.status === 200) {
                setCategorySec(res.result)
            }
        } catch (error) {
        }
    }

    const getCategoryTh = async () => {
        try {
            const res = await GET_CATEGORY_TH()
            if (res.status === 200) {
                setCategoryTh(res.result)
            }
        } catch (error) {
        }
    }

    const getStorageFr = async () => {
        try {
            const res = await GET_STORAGE_FR()
            if (res.status === 200) {
                setStorageFr(res.result)
            }
        } catch (error) {
        }
    }

    const getStorageSec = async () => {
        try {
            const res = await GET_STORAGE_SEC()
            if (res.status === 200) {
                setStorageSec(res.result)
            }
        } catch (error) {
        }
    }

    const getStorageTh = async () => {
        try {
            const res = await GET_STORAGE_TH()
            if (res.status === 200) {
                setStorageTh(res.result)
            }
        } catch (error) {
        }
    }

    const getCarBrand = async () => {
        try {
            const res = await GET_CAR_BRAND()
            if (res.status === 200) {
                setCarBrand(res.result)
            }
        } catch (error) {
        }
    }

    const getCarModel = async () => {
        try {
            const res = await GET_CAR_MODEL()
            if (res.status === 200) {
                setCarModel(res.result)
            }
        } catch (error) {
        }
    }



    return (
        <div className="productCreate">
            <PageHeader
                ghost={false}
                title="ข้อมูลสินค้า"
                onBack={() => goBack()}
                extra={[
                    <Button key="1" type="primary" onClick={() => form.submit()}>
                        บันทึก
                    </Button>,
                ]}>
                <Divider style={{ margin: "-2px 0px 10px 0px" }} />
                <Form form={form} onFinish={saveProduct} >
                    <Row gutter={6}>
                        <Col span={12}>
                            <Card bordered={false} >
                                <Card type="inner" title="รายละเอียดสินค้า" >
                                    <Row gutter={16}>
                                        <Col md={12}>
                                            <Form.Item name="jjCodeNumber">
                                                <Input placeholder="รหัสสินค้า" />
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="name" >
                                                <Input placeholder="ชื่อสินค้า" />
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="partNumber">
                                                <Input placeholder="PartNumber" />
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="amount">
                                                <Input placeholder="จำนวนคงเหลือ" />
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="price" >
                                                <Input placeholder="ราคาซื้อ (ต่อหน่อย)" suffix="บาท" />
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="price_sell" >
                                                <Input placeholder="ราคาขาย (ต่อหน่อย)" suffix="บาท" />
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="unit">
                                                <Select placeholder="หน่วยนับ" >
                                                    {/* <Option value="jack">ชิ้น</Option> */}
                                                    {unit.map((item: any) =>
                                                        <Option value={item.id}>{item.name}</Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="limit_amount">
                                                <Input placeholder="ลิมิตสินค้า" />
                                            </Form.Item>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="product_grade">
                                                <Select placeholder="เกรดสินค้า" >
                                                    {/* <Option value="jack">1</Option> */}
                                                    {productgrade.map((item: any) =>
                                                        <Option value={item.id}>{item.name}</Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        <Col md={12}>
                                            <Form.Item name="category_fr" >
                                                <Select placeholder="หมวดหมู่สินค้า 1" >
                                                    {/* <Option value="jack">1</Option>*/}
                                                    {categoryfr.map((item: any) =>
                                                        <Option value={item.id}>{item.name}</Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Col>

                                        <Col md={12}>
                                            <Form.Item name="category_sec">
                                                <Select placeholder="หมวดหมู่สินค้า 2" >
                                                    {/* <Option value="jack">1</Option> */}
                                                    {categorysec.map((item: any) =>
                                                        <Option value={item.id}>{item.name}</Option>)}

                                                </Select>
                                            </Form.Item>

                                        </Col>
                                        <Col md={12}>
                                            <Form.Item name="category_th">
                                                <Select placeholder="หมวดหมู่สินค้า 3" >
                                                    {/* <Option value="jack">1</Option> */}
                                                    {categoryth.map((item: any) =>
                                                        <Option value={item.id}>{item.name}</Option>)}
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
                                                    <Form.Item name="car_brand">
                                                        <Select placeholder="ยี่ห้อรถ">
                                                            {/* <Option value="jack">1</Option> */}
                                                            {carbrand.map((item: any) =>
                                                                <Option value={item.id}>{item.name}</Option>)}
                                                        </Select>
                                                    </Form.Item >
                                                </Col>
                                                <Col md={24}>
                                                    <Form.Item >
                                                        <Select placeholder="โมเดลรถ">
                                                            {/* <Option value="jack">1</Option> */}
                                                            {carmodel.map((item: any) =>
                                                                <Option value={item.id}>{item.name}</Option>)}
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
                                                    <Form.Item name="storage_fr">
                                                        <Select placeholder="โซน">
                                                            {storagefr.map((item: any) =>
                                                                <Option value={item.id}>{item.name}</Option>)}
                                                        </Select>
                                                    </Form.Item >
                                                </Col>
                                                <Col md={24}>
                                                    <Form.Item name="storage_sec">
                                                        <Select placeholder="ตู้" >
                                                            {storagesec.map((item: any) =>
                                                                <Option value={item.id}>{item.name}</Option>)}
                                                        </Select>
                                                    </Form.Item >
                                                </Col>
                                                <Col md={24}>
                                                    <Form.Item name="storage_th">
                                                        <Select placeholder="ชั้น" >
                                                            {storageth.map((item: any) =>
                                                                <Option value={item.id}>{item.name}</Option>)}
                                                        </Select>
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
                                        onOk={() => form.submit()} onCancel={handleCancel}>
                                        <Form onFinish={handleAdd} form={form}>
                                            <Form.Item name="company" >
                                                <Select placeholder="บริษัทที่จำหน่าย"
                                                    allowClear 
                                                    onChange={onFinish}>
                                                    {/* <Option value="jack">บริษัท B</Option> */}
                                                    {company.map((item: any) =>
                                                        <Option value={item.id}>{item.name_th}</Option>)}
                                                </Select>
                                            </Form.Item>
                                            <Form.Item name="product_company"  >
                                                <Select placeholder="ชื่อสินค้า(บริษัท)"
                                                    allowClear
                                                    style={{
                                                        marginTop: 20,
                                                        borderRadius: "5px",
                                                    }}>

                                                    {/* <Option value="jack">บริษัท B</Option> */}
                                                    {datacompany.map((item: any) =>
                                                        <Option value={item.id}>{item.product_company_name}</Option>)}
                                                </Select>
                                            </Form.Item>
                                        </Form>
                                    </Modal>
                                    <Table size="small"
                                        rowKey="id"
                                        columns={[
                                            {
                                                title: 'ชื่อบริษัท', dataIndex: 'company',
                                                render: (Item: any) => (
                                                    <>
                                                        {Item?.name_th}
                                                    </>
                                                ),
                                            },
                                            {
                                                title: 'รหัสสินค้า(บริษัท)', dataIndex: 'code', key: 'code',
                                                // render: (code: IProductCompanyGET) => (
                                                //     <>
                                                //         {code.code}
                                                //     </>
                                                // ),
                                            },

                                            {
                                                title: 'ชื่อสินค้า(บริษัท)', dataIndex: 'product_company_name',
                                                key: 'product_company_name',

                                            },
                                        ]}
                                        dataSource={dataSource}
                                    />
                                </Card>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </PageHeader>
        </div>
    )
}
export default ProductCreate;