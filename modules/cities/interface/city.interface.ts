
  import DepartmentModel from '' 
  export interface CityModel {
    id?:number
    code?:string
    name?:string
    departmentId?:number
    createdAt?:Date
    updatedAt?:Date
    deletedAt?:Date
    department: DepartmentModel;
};



