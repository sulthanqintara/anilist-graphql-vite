interface Collection {
  name: string;
  list?: CollectionAnimeDetail[];
}
interface CollectionAnimeDetail {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    large: string;
    medium: string;
  };
}
