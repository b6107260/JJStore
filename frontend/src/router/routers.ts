import React from "react";
const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
//----Employee----//
const Employee = React.lazy(() => import("../views/employee/Employee"));
const ShowEmployee = React.lazy(() => import("../views/employee/ShowEmployee"));
const CreateEmployee = React.lazy(
  () => import("../views/employee/CreateEmployee")
);
//----Permissions----//
const ManagePermissions = React.lazy(
  () => import("../views/setting/ManagePermissions")
);
const CreatePermissions = React.lazy(
  () => import("../views/setting/CreatePermissions")
);
//----Setting----//
const Setting = React.lazy(() => import("../views/setting/Setting"));

//----Customer----//
const Customer = React.lazy(() => import("../views/customer/Customer"));
const ShowCustomer = React.lazy(() => import("../views/customer/ShowCustomer"));
const CreateCustomer = React.lazy(
  () => import("../views/customer/CreateCustomer")
);

//----PurchaseProduct----//
const PurchaseProduct = React.lazy(
  () => import("../views/purchase-product/PurchaseProduct")
);
const CreateProduct = React.lazy(
  () => import("../views/purchase-product/CreateProduct")
);
const ListProduct = React.lazy(
  () => import("../views/purchase-product/ListProduct")
);
const NewOrderProduct = React.lazy(
  () => import("../views/purchase-product/NewOrderProduct")
);

const OrderProduct = React.lazy(
  () => import("../views/purchase-product/OrderProduct")
);
const CloseOrder = React.lazy(
  () => import("../views/purchase-product/CloseOrder")
);

//----Product----//
const Product = React.lazy(
  () => import("../views/product/Product")
);
const ProductCreate = React.lazy(
  () => import("../views/product/ProductCreate")
);
const HistoryProduct = React.lazy(
  () => import("../views/product/HistoryProduct")
);
const EditProduct = React.lazy(
  () => import("../views/product/EditProduct")
);

//----Company----//
const Company = React.lazy(
  () => import("../views/company/Company")
);
const CompanyCreate = React.lazy(
  () => import("../views/company/CompanyCreate")
);
const EditCompany = React.lazy(
  () => import("../views/company/EditCompany")
);

export const routers = [
  //----Dashboard----//
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
  //----Employee----//
  {
    path: "/employee",
    name: "Employee",
    exact: true,
    component: Employee,
  },
  {
    path: "/create-employee",
    name: "CreateEmployee",
    exact: true,
    component: CreateEmployee,
  },
  {
    path: "/show-employee",
    name: "ShowEmployee",
    exact: true,
    component: ShowEmployee,
  },
  //----Customer----//
  {
    path: "/customer",
    name: "Customer",
    exact: true,
    component: Customer,
  },
  {
    path: "/create-customer",
    name: "CreateCustomer",
    exact: true,
    component: CreateCustomer,
  },
  {
    path: "/show-customer",
    name: "ShowCustomer",
    exact: true,
    component: ShowCustomer,
  },
  //----Permissions----//
  {
    path: "/permissions",
    name: "ManagePermissions",
    exact: true,
    component: ManagePermissions,
  },
  {
    path: "/create-permissions",
    name: "CreatePermissions",
    exact: true,
    component: CreatePermissions,
  },

  //----Product----//
  {
    path: "/product",
    name: "Product",
    exact: true,
    component: Product,
  },
  {
    path: "/product-create",
    name: " ProductCreate",
    exact: true,
    component: ProductCreate,
  },
  {
    path: "/history-product",
    name: " HistoryProduct",
    exact: true,
    component: HistoryProduct,
  },
  {
    path: "/edit-product/:product",
    name: " EditProduct",
    exact: true,
    component: EditProduct,
  },

  //----Company----//
  {
    path: "/company",
    name: "Company",
    exact: true,
    component:Company,
  },
  {
    path: "/company-create",
    name: "CompanyCreate",
    exact: true,
    component:CompanyCreate,
  },
  {
    path: "/edit-company",
    name: " EditCompany",
    exact: true,
    component: EditCompany,
  },

  //----PurchaseProduct----//
  {
    path: "/purchase-product",
    name: "Purchase Product",
    exact: true,
    component: PurchaseProduct,
  },

  {
    path: "/create-product",
    name: "Create Product",
    exact: true,
    component: CreateProduct,
  },
  {
    path: "/list-product",
    name: "List Product",
    exact: true,
    component: ListProduct,
  },
  {
    path: "/new-order-product",
    name: "New Order Product",
    exact: true,
    component: NewOrderProduct,
  },
  {
    path: "/order-product",
    name: "Order Product",
    exact: true,
    component: OrderProduct,
  },

  {
    path: "/close-order",
    name: "Close Order",
    exact: true,
    component: CloseOrder,
  },
  //----Setting----//
  {
    path: "/setting",
    name: "Setting",
    exact: true,
    component: Setting,
  },
];
