export class exploreCate{ 
    picture: string;
    title: string;
    items: number;
    chapters: number;
    
    constructor(picture: string,
        title: string,
        items: number,
        chapters: number){
            this.chapters = chapters;
            this.items = items;
            this.title = title;
            this.picture = picture;
    }
    

}