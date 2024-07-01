export class DataService {
    private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia9"];
    getData(): string[] {
        return this.data;
    }
    addData(name: string): void {
        this.data.push(name);
    }
}