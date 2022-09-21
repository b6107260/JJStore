import { ICodeGET } from "./code";
import { IGradeGET } from "./grade";

export interface IProdctGET {    
    id: number,
    name: string,
    price_sell: number,
    price: number,
    limit_amount: number,
    amount: number,
    status: string,

    jjCodeNumber: number,


    unit_id: number,

    detail_id: number,


    grade_id: number,

}

export interface IProductPOST {
    name: string,
    price_sell: number,
    limit_amount: number,
    amount: number,
    
    code_id: number,
    code: ICodeGET,

    grade_id: number,
    grade: IGradeGET

}