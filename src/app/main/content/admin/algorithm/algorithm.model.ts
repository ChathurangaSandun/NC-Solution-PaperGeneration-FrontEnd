export class Algorithm {
    
    public Id: number;
    public Name: string;
    public Description: string;

    public constructor(algorithm?){
        algorithm = algorithm || {};
        this.Id = algorithm.id || 0;
        this.Name = algorithm.name || '';
        this.Description = algorithm.description || '';
    }

    
}
