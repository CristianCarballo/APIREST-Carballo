export class Student {
    id: number;
    firstName: string;
    lastName: string;
    //birthDate: Date;
    isTop10: boolean;

    constructor(id: number, firstName: string, lastName: string, isTop10: boolean) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        //this.birthDate = birthDate;
        this.isTop10 = isTop10;
    }
}