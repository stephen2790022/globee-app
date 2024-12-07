import { renderHook } from "@testing-library/react";
import { useBookDetailsService } from "./book-details.service";
import * as ReactRouterDom from "react-router-dom";
import * as BookListService from "../BookListContainer/book-list.service";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

jest.mock("../BookListContainer/book-list.service", () => ({
  useBookListService: jest.fn(),
}));

describe("useBookDetailsService", () => {
  const mockUseParams = ReactRouterDom.useParams as jest.Mock;
  const mockUseBookListService =
    BookListService.useBookListService as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return the correct bookData when the book is found", () => {
    const mockId = "book1";
    const mockBook = { id_book: mockId, title: "Mock Book" };
    const mockSubCategory = { book_list: [mockBook] };
    const mockTopCategoryData = { sub_category_list: [mockSubCategory] };

    mockUseParams.mockReturnValue({ id: mockId });
    mockUseBookListService.mockReturnValue({
      topCategoryData: mockTopCategoryData,
      isLoadingTopCategoryData: false,
      fetchTopCategoryDataError: null,
    });

    const { result } = renderHook(() => useBookDetailsService());

    expect(result.current.bookData).toEqual(mockBook);
    expect(result.current.isLoadingTopCategoryData).toBe(false);
    expect(result.current.fetchTopCategoryDataError).toBeNull();
  });

  it("should return null for bookData when the book is not found", () => {
    const mockId = "book2";
    const mockBook = { id_book: "book1", title: "Mock Book" };
    const mockSubCategory = { book_list: [mockBook] };
    const mockTopCategoryData = { sub_category_list: [mockSubCategory] };

    mockUseParams.mockReturnValue({ id: mockId });
    mockUseBookListService.mockReturnValue({
      topCategoryData: mockTopCategoryData,
      isLoadingTopCategoryData: false,
      fetchTopCategoryDataError: null,
    });

    const { result } = renderHook(() => useBookDetailsService());

    expect(result.current.bookData).toBeNull();
  });

  it("should return null for bookData when there is an error", () => {
    const mockId = "book1";

    mockUseParams.mockReturnValue({ id: mockId });
    mockUseBookListService.mockReturnValue({
      topCategoryData: null,
      isLoadingTopCategoryData: false,
      fetchTopCategoryDataError: { message: "Error" },
    });

    const { result } = renderHook(() => useBookDetailsService());

    expect(result.current.bookData).toBeNull();
    expect(result.current.fetchTopCategoryDataError).toEqual({
      message: "Error",
    });
  });

  it("should handle loading state correctly", () => {
    const mockId = "book1";

    mockUseParams.mockReturnValue({ id: mockId });
    mockUseBookListService.mockReturnValue({
      topCategoryData: null,
      isLoadingTopCategoryData: true,
      fetchTopCategoryDataError: null,
    });

    const { result } = renderHook(() => useBookDetailsService());

    expect(result.current.isLoadingTopCategoryData).toBe(true);
    expect(result.current.bookData).toBeNull();
    expect(result.current.fetchTopCategoryDataError).toBeNull();
  });
});
