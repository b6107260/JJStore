import { ISubCategoryFrGET } from "./subCategoryFr";
import { ISubCategorySecGET } from "./subCategorySec";
import { ISubCategoryThGET } from "./subCategoryTh";


export interface ICategoryGET {

    id: number,
    category_fr: ISubCategoryFrGET,
    category_sec: ISubCategorySecGET,
    category_th: ISubCategoryThGET,
    
}