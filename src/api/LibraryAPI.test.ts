import fetchMock from "fetch-mock";
import { fetchLibraryItems } from "./LibraryAPI";

const items = [
  {
    name: "Lib 1",
    owner: "Owner 1",
    rating: "Rating 1",
  },
];

describe("LibraryAPI", () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  test("call API with query and sort param", async () => {
    fetchMock.mock("*", {});

    await fetchLibraryItems("something", "RATING");
    expect(fetchMock.lastCall()?.response?.url).toBe(
      "http://localhost:3721/api/search?q=something&sort=RATING"
    );
  });

  test("call API with default params", async () => {
    fetchMock.mock("*", {});

    await fetchLibraryItems();
    expect(fetchMock.lastCall()?.response?.url).toBe(
      "http://localhost:3721/api/search?q=&sort=NAME"
    );
  });

  test("return library items", async () => {
    fetchMock.mock(
      "http://localhost:3721/api/search?q=test&sort=NAME",
      JSON.stringify(items)
    );

    const response = await fetchLibraryItems("test");
    expect(response).toEqual(items);
  });

  test("throw error", async () => {
    fetchMock.mock("http://localhost:3721/api/search?q=test&sort=NAME", 404);

    await expect(async () => {
      await fetchLibraryItems("test");
    }).rejects.toThrow("Not found");
  });
});
