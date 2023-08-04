export const COLLECTIONS = "collections";

const CollectionList = () => {
  const collectionsString = localStorage.getItem(COLLECTIONS);
  const collections: Collection[] = JSON.parse(collectionsString || "[]");
  return (
    <div>
      {collections.map((collection) => (
        <div key={collection.name}>
          <div>{collection.name}</div>
          {collection.list?.map((anime) => (
            <div key={anime.id}>
              <div>{anime.title.english}</div>
              <div>{anime.title.native}</div>
              <div>{anime.title.romaji}</div>
              <img src={anime.coverImage.large} alt="" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CollectionList;
