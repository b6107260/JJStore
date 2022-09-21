import { ICompanyGET } from "./Company";
import { IProdctGET } from "./product";

export interface IProductCompanyGET {    
    id: number,
    product_company_name: string,
    code: string,
    note: string,
    status: string,
    products: IProdctGET ,
    company: ICompanyGET
}