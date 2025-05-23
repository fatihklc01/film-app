export interface Director {
    id: string;
    name: string;
    birthYear: number;
    nationality: string;
    isActive: boolean;
    imageUrl: string;
}

export interface Film {
    id: string;
    title: string;
    description: string;
    releaseYear: number;
    isActive: boolean;
    releaseDate: string;
    imageUrl: string;
    genre: string;
    actors: string[];
    director: {
        id: string;
    };
}
