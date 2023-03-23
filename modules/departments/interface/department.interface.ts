
  import CountryModel from '' 
  export interface DepartmentModel {
    id?:number
    code?:string
    name?:string
    countryId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    country: CountryModel;
};



