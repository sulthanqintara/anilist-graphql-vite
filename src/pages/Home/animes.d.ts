interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  description: string;
  coverImage: {
    large: string;
    medium: string;
  };
}
interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}
interface Datas {
  Page: {
    media: Anime[];
    pageInfo: PageInfo;
  };
}
