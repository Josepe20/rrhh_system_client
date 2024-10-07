interface DepartmentBase {
    name: string,
    status: boolean | string,
}

export interface DepartmentCreate extends DepartmentBase {}   

export interface Department extends DepartmentBase {
    id: Number
}
    

