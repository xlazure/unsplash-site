import { useCallback, useState } from "react";
import { searchPhotos } from "../api/searchPhotos";

export function useFetchData(initialValue) {
  const [fetchData, setFetchData] = useState();

  const fillData = useCallback(
    async () => setFetchData(await searchPhotos(initialValue)),
    [initialValue]
  );
  return [fetchData, fillData];
}
