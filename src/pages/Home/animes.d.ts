interface Anime {
  __typename: string;
  id: number;
  title: {
    __typename: string;
    romaji: string;
    english: string;
    native: string;
  };
  description: string;
  coverImage: {
    __typename: string;
    large: string;
  };
}
interface PageInfo {
  __typename: string;
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
