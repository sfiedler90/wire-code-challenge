const API_BASE_URL = process.env.REACT_APP_API_URL;

export type LibraryItemAO = {
  name: string;
  owner: string;
  rating: number;
};

export type LibrarySortParamType = "NAME" | "OWNER" | "RATING";

export const fetchLibraryItems = (
  query = "",
  sort: LibrarySortParamType = "NAME"
): Promise<LibraryItemAO[]> =>
  fetch(`${API_BASE_URL}/api/search?q=${query}&sort=${sort}`).then(
    async (response) => {
      if (!response.ok) {
        throw new Error("Not found");
      }
      return response.json();
    }
  );
