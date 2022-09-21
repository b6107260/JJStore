import { Button, Col, Input, Row, Divider } from "antd";
import { Space, Card, Descriptions } from 'antd';
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";
import { PageHeader } from 'antd';
import CompanyCard from "@components/company-card/CompanyCard";



const { Search } = Input;
const data = [
    {
        id: "1",
        title: "บริษัทไทย",
        str1: "wirhiqwrujgn",
        str2: "rmqmetik",
        str3: "poetjiiotjg",
        str4: "eogtbkmoietnbite",
        str5: "etbnqietnhiqetkgn",
      
    },
    {
        id: "2",
        title: "บริษัทไทย",
        str1: "wirhiqwrujgn",
        str2: "rmqmetik",
        str3: "poetjiiotjg",
        str4: "eogtbkmoietnbite",
        str5: "etbnqietnhiqetkgn",
       
    },

];

const Company = () => {

    return (
        <div className="Product">
            <PageHeader
                ghost={false}
                title="จัดการบริษัทสั่งซื้อ"
            >
                <Divider style={{ margin: "-2px 0px 30px 0px" }} />
                <Search
                    placeholder="ชื่อบริษัทไทย | ชื่ออังกฤษ | ชื่อย่อ"
                    allowClear enterButton="ค้นหา"
                    size="large"

                    style={{ width: "40%", borderRadius: "10px" }} />


                <Space style={{ float: "right" }} size="middle">
                    <Link to={"/company-create"}>
                        <Button
                            size="large"
                            type="primary"
                            icon={<PlusCircleOutlined />}>
                            เพิ่ม
                        </Button>
                    </Link>
                    <Link to={"/history-product"}>
                        <Button
                            size="large">
                            ประวัติการจัดการ
                        </Button>
                    </Link>
                </Space>

               
                    {data.map((item) => (
                        <CompanyCard
                            data={item}
                        />
                    ))}
              
            </PageHeader>
        </div>
    )
};

export default Company;







// import { Button, Col, Input, Row, Divider } from "antd";
// import { Space, Card, Descriptions } from 'antd';
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { PlusCircleOutlined } from "@ant-design/icons";
// import { PageHeader } from 'antd';
// import CompanyCard from "@components/company-card/CompanyCard";



// const { Search } = Input;
// const data = [
//     {
//         id: "1",
//         title: "บริษัทไทย",
//         str1: "wirhiqwrujgn",
//         str2: "rmqmetik",
//         str3: "poetjiiotjg",
//         str4: "eogtbkmoietnbite",
//         str5: "etbnqietnhiqetkgn",
      
//     },
//     {
//         id: "2",
//         title: "บริษัทไทย",
//         str1: "wirhiqwrujgn",
//         str2: "rmqmetik",
//         str3: "poetjiiotjg",
//         str4: "eogtbkmoietnbite",
//         str5: "etbnqietnhiqetkgn",
       
//     },

// ];

// const Company = () => {

//     return (
//         <div className="Product">
//             <PageHeader
//                 ghost={false}
//                 title="จัดการบริษัทสั่งซื้อ"
//             >
//                 <Divider style={{ margin: "-2px 0px 30px 0px" }} />
//                 <Search
//                     placeholder="ชื่อบริษัทไทย | ชื่ออังกฤษ | ชื่อย่อ"
//                     allowClear enterButton="ค้นหา"
//                     size="large"

//                     style={{ width: "40%", borderRadius: "10px" }} />


//                 <Space style={{ float: "right" }} size="middle">
//                     <Link to={"/company-create"}>
//                         <Button
//                             size="large"
//                             type="primary"
//                             icon={<PlusCircleOutlined />}>
//                             เพิ่ม
//                         </Button>
//                     </Link>
//                     <Link to={"/history-product"}>
//                         <Button
//                             size="large">
//                             ประวัติการจัดการ
//                         </Button>
//                     </Link>
//                 </Space>

               
//                     {data.map((item) => (
//                         <CompanyCard
//                             data={item}
//                         />
//                     ))}
              
//             </PageHeader>
//         </div>
//     )
// };

// export default Company;

