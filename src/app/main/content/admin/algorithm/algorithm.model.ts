export class Algorithm {
    
    public Id: number;
    public Name: string;
    public Description: string;

    public constructor(algorithm?){
        algorithm = algorithm || {};
        this.Id = algorithm.Id || 0;
        this.Name = algorithm.Name || '';
        this.Description = algorithm.Description || '';
    }

    
}
