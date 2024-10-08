import { JobPosition } from "../jobPosition/job-position.interfaces";
import { Department } from "../departments/department.interfaces";

interface EmployeeBase {
    department_id: Number,
    job_position_id: Number
}

export interface EmployeeCreate extends EmployeeBase {
    first_name: string,
    last_name: string,
    address: string,
    birth_date: Date | null,
}

export interface EmployeeResponse extends EmployeeBase {
    id: Number,
    first_name: string,
    last_name: string,
    address: string,
    birth_date: Date,
    department: Department,
    job_position: JobPosition
}
