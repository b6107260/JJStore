import {
  ContactsFilled,
  LayoutFilled,
  ShoppingFilled,
  SkinFilled,
  SmileFilled,
  StarFilled,
  ToolFilled,
} from "@ant-design/icons";

export const menu = [
  {
    type: "MENU",
    title: "แดชบอร์ด",
    path: "/dashboard",
    icon: <LayoutFilled />,
  },
  {
    type: "MENU",
    title: "พนักงาน",
    path: "/employee",
    icon: <SkinFilled />,
  },
  {
    type: "MENU",
    title: "ลูกค้า",
    path: "/customer",
    icon: <ContactsFilled />,
  },
  {
    type: "MENU",
    title: "ข้อมูลสินค้า",
    path: "/product",
    icon: <StarFilled /> 
  },

  {
    type: "SUBMENU",
    title: "สั่งซื้อสินค้า",
    path: "/purchase-product",
    icon: <ShoppingFilled />,
    sub: [
      {
        type: "MENU",
        title: "สั่งซื้อสินค้า",
        path: "/purchase-product",
      },
      {
        type: "MENU",
        title: "รายการสั่งซื้อ",
        path: "/purchase-product",
      },
      {
        type: "MENU",
        title: "คำสั่งซื้อที่ส่งแล้ว",
        path: "/purchase-product",
      },
      {
        type: "MENU",
        title: "คำสั่งซื้อที่สำเร็จ",
        path: "/purchase-product",
      },
    ],
  },
  {
    type: "MENU",
    title: "ข้อมูลบริษัทสั่งซื้อ",
    path: "/company",
    icon: <SmileFilled />
  },
  {
    type: "MENU",
    title: "ตั้งค่า",
    path: "/setting",
    icon: <ToolFilled />,
  },
];
