
interface JobPositionBase {
    name: string,
    status: boolean | string,
}   

export interface JobPositionCreate extends JobPositionBase {}


export interface JobPosition extends JobPositionBase {
    id: Number
}
    