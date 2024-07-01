export class Item {
    date: Date;
    name: string;
    id: number;
    bool: boolean;
    constructor(date: Date, name: string, id: number, bool: boolean) {
        this.bool = bool;
        this.id = id;
        this.date = date;
        this.name = name;
    }
    
}