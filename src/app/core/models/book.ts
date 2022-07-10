import { AppRoutingModule } from "../app-routing.module";

export interface Book {
    id: string;
    authorId: string;
    name: string;
    brief: string;
    publishDate: string;
    genre: string;
    score: number;
}

