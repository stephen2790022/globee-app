import { renderHook } from "@testing-library/react";

import { useBookListService } from "./book-list.service";
import { useFetchBooksQuery } from "../../store/rtkEndPoints/bookApi";
import { ErrorType } from "../../store/rtkEndPoints/bookApi.types";

jest.mock("../../store/rtkEndPoints/bookApi");

const mockUseFetchBooksQuery = useFetchBooksQuery as jest.Mock;

describe("useBookListService", () => {
  it("should return the correct topCategoryData when data is present", () => {
    const mockData = {
      top_category_list: [
        { id_top_category: "_top", name: "Top Category" },
        { id_top_category: "_other", name: "Other Category" },
      ],
    };
    mockUseFetchBooksQuery.mockReturnValue({
      data: mockData,
      isFetching: false,
      error: null,
    });

    const { result } = renderHook(() => useBookListService());

    expect(result.current.topCategoryData).toEqual(
      mockData.top_category_list[0],
    );
    expect(result.current.isLoadingTopCategoryData).toBe(false);
    expect(result.current.fetchTopCategoryDataError).toBeNull();
  });

  it("should return null for topCategoryData if _top category is not found", () => {
    const mockData = {
      top_category_list: [
        { id_top_category: "_other", name: "Other Category" },
      ],
    };
    mockUseFetchBooksQuery.mockReturnValue({
      data: mockData,
      isFetching: false,
      error: null,
    });

    const { result } = renderHook(() => useBookListService());

    expect(result.current.topCategoryData).toBeNull();
  });

  it("should handle loading state correctly", () => {
    mockUseFetchBooksQuery.mockReturnValue({
      data: null,
      isFetching: true,
      error: null,
    });

    const { result } = renderHook(() => useBookListService());

    expect(result.current.isLoadingTopCategoryData).toBe(true);
    expect(result.current.topCategoryData).toBeNull();
    expect(result.current.fetchTopCategoryDataError).toBeNull();
  });

  it("should handle errors correctly", () => {
    const mockError = { message: "Error fetching data" } as ErrorType;

    mockUseFetchBooksQuery.mockReturnValue({
      data: null,
      isFetching: false,
      error: mockError,
    });

    const { result } = renderHook(() => useBookListService());

    expect(result.current.fetchTopCategoryDataError).toEqual(mockError);
    expect(result.current.topCategoryData).toBeNull();
    expect(result.current.isLoadingTopCategoryData).toBe(false);
  });
});
