import { useCallback, useState } from "react";
import { photoCollections } from "../api/getPhotoCollections";

export function useFetchKeywords(initialValue) {
  const [fetchData, setFetchData] = useState();

  const fillData = useCallback(
    async () => setFetchData(await photoCollections(initialValue)),
    [initialValue]
  );
  return [fetchData, fillData];
}
