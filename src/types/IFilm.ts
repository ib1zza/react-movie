interface Rating {
  rate: number;
  count: number;
}

export interface IFilm {
  id: number;
  title: string;
  dateOfCreation: string;
  duration: number;
  description: string;
  director: string;
  writers: string;
  actors: string;
  rating: Rating;
  genre: string[];
  cover: string;
}
