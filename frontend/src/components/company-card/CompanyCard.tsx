import { Button, Col, Row, Card } from "antd";
import { EditOutlined, EyeOutlined } from '@ant-design/icons';


interface IData {
  id: string;
  title: string;
  str1: string;
  str2: string;
  str3: string;
  str4: string;
  str5: string;

}
interface Props {
  data: IData;
}


const CompanyCard = ({ data }: Props) => {
  return (

    <div className="card-com" >
      <Row >
        <Card
          style={{
            margin: "30px 0px 20px 0px",
           
            borderRadius: "10px",
            borderColor: "#08979c",

          }}>
          <h1>{data.title}</h1>
          <Row >
            <Col span={24}>
              <p>ชื่ออังกฤษ : {data.str1}</p>
            </Col>
            <Col span={24}>
              <p>ชื่อย่อ : {data.str2}</p>
            </Col>
            <Col span={24}>
              <p>หมวดหมู่สินค้า : {data.str3}, {data.str3}, {data.str3}</p>
            </Col>
            <Col span={24}>
              <p>เบอร์ : {data.str4}</p>
            </Col>
            <Col span={24}>
              <p>LineID : {data.str5}</p>
            </Col>
          </Row>

          <Row justify="center" gutter={12}>
            <Col>
              <Button >ดูข้อมูล</Button>
            </Col>
            <Col>
              <Button>แก้ไข</Button>
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
};

export default CompanyCard;