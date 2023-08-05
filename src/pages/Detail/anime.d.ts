interface AnimeDetail {
  Media: {
    id: number;
    title: {
      romaji: string;
      native: string;
      english: string;
    };
    episodes: number;
    duration: number;
    description: string;
    type: string;
    format: string;
    startDate: {
      year: number;
      month: number;
      day: number;
    };
    endDate: {
      year: number;
      month: number;
      day: number;
    };
    season: string;
    coverImage: {
      large: string;
      medium: string;
    };
    genres: string[];
    averageScore: number;
    characters: {
      nodes: Character[];
    };
  };
}
interface Character {
  id: number;
  name: {
    full: string;
    native: string;
  };
  image: {
    large: string;
  };
}
