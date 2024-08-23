import { renderHook, waitFor } from "@testing-library/react";
import { useLibraryItems } from "./useLibraryItems";
import { fetchLibraryItems } from "../api/LibraryAPI";

jest.mock("../api/LibraryAPI");
const mockFetchLibraryItems = jest.mocked(fetchLibraryItems);

const dummyItems = [
  {
    name: "Lib 1",
    owner: "Owner 1",
    rating: 1,
  },
];

jest.useFakeTimers();

describe("useLibraryItems", () => {
  beforeEach(() => {
    mockFetchLibraryItems.mockReset();
  });

  test("expect API is called with certain params", async () => {
    renderHook(() => useLibraryItems("Sun", "RATING"));

    await waitFor(() => {
      expect(mockFetchLibraryItems).toHaveBeenCalledWith("Sun", "RATING");
    });
  });

  test("expect isLoading to be true and items to be empty on init", async () => {
    const { result } = renderHook(useLibraryItems);
    await waitFor(() => {
      expect(result.current[0]).toEqual([]);
      expect(result.current[1]).toBeTruthy();
    });
  });

  test("expect isLoading to be false and items set after API response success", async () => {
    mockFetchLibraryItems.mockResolvedValueOnce(dummyItems);
    const { result } = renderHook(useLibraryItems);

    await waitFor(() => {
      expect(result.current[0]).toEqual(dummyItems);
      expect(result.current[1]).toBeFalsy();
    });
  });

  test("expect isLoading to be false and items empty after API response failed", async () => {
    const logSpy = jest
      .spyOn(global.console, "error")
      .mockImplementation(() => {});
    mockFetchLibraryItems.mockResolvedValueOnce(dummyItems);
    const { result, rerender } = renderHook(useLibraryItems);

    await waitFor(() => {
      expect(result.current[0]).toEqual(dummyItems);
    });

    mockFetchLibraryItems.mockRejectedValueOnce("Not found");
    rerender("Moon");

    await waitFor(() => {
      expect(result.current[0]).toEqual([]);
      expect(result.current[1]).toBeFalsy();
      expect(logSpy).toHaveBeenCalledWith("Not found");
    });

    logSpy.mockRestore();
  });
});
