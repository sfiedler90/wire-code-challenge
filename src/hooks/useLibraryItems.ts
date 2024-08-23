import { useEffect, useState } from "react";
import {
  LibraryItemAO,
  LibrarySortParamType,
  fetchLibraryItems,
} from "../api/LibraryAPI";

export function useLibraryItems(
  query = "",
  sort: LibrarySortParamType = "NAME"
): [LibraryItemAO[], boolean] {
  const [items, setItems] = useState<LibraryItemAO[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const fetchedItems = await fetchLibraryItems(query, sort);
        setItems(fetchedItems);
        setLoading(false);
      } catch (e) {
        setItems([]);
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    const timoutInt = setTimeout(fetchData, 650);
    return () => clearTimeout(timoutInt);
  }, [query, sort]);

  return [items, isLoading];
}
