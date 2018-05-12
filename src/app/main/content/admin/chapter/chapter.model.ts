export class Chapter {        
    public Id: number;
    public Name: string;
    public Description: string;

    public constructor(chapter?){
        chapter = chapter || {};
        this.Id = chapter.Id || 0;
        this.Name = chapter.Name || '';
        this.Description = chapter.Description || '';
    }
}
