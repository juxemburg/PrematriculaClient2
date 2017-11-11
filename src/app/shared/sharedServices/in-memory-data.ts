import { InMemoryDbService } from "angular-in-memory-web-api";
export class InMemoryAppDbService implements InMemoryDbService {

    private data = {
        
    };

    createDb() {
        return this.data;
    }

}