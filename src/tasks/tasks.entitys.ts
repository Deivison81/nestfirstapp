
export enum taskStatus{
    PENDING = 'PENDING',

    IN_PROGRESS = 'IN_PROGRESS',

    DONE = 'DONE',
}


export class tasks{

    id: string;

    title: string;

    description: string;

    status: taskStatus;

}