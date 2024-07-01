import { Injectable, Optional } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class DataService {
    private data: string[] = ["Apple iPhone XR", "Samsung Galaxy S9", "Nokia9"];
    constructor(@Optional() private logService: LogService) { }
    getData(): string[] {
        if (this.logService)
            this.logService.write("allo");
        return this.data;
    }
    addData(name: string): void {
        this.data.push(name);
        if (this.logService)
            this.logService.write("allo, " + name);
    }
}