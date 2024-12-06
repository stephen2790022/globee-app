import { renderHook, act } from "@testing-library/react";
import { useBookDetailsView } from "./book-details.view";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useIsDarkMode } from "../../hooks/useIsDarkMode";
import {
  addBookmark,
  removeBookmark,
} from "../../store/reducer/bookmarksSlice";
import { Book } from "../../store/rtkEndPoints/bookApi.types";

jest.mock("../../hooks/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock("../../hooks/useIsDarkMode", () => ({
  useIsDarkMode: jest.fn(),
}));

const mockUseDispatch = useAppDispatch as jest.Mock;
const mockUseSelector = useAppSelector as jest.Mock;
const mockUseIsDarkMode = useIsDarkMode as jest.Mock;

const mockBookData: Book = {
  id_book: "1",
  name_book: "Test Book",
  author: "Test Author",
  content_type: "Test Content",
  has_contents: 1,
  has_purchased: true,
  create_at: "2023-01-01",
  is_unlimited: 0,
  publisher: "Test Publisher",
  img_url: "http://example.com/image.jpg",
};

describe("useBookDetailsView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseDispatch.mockReturnValue(jest.fn());
    mockUseSelector.mockReturnValue([]);
    mockUseIsDarkMode.mockReturnValue({ isDarkMode: false });
  });

  it("should return isBookmarked as false if the book is not in bookmarks", () => {
    mockUseSelector.mockReturnValue([]);

    const { result } = renderHook(() =>
      useBookDetailsView({ bookData: mockBookData }),
    );

    expect(result.current.isBookmarked).toBe(false);
  });

  it("should return isBookmarked as true if the book is in bookmarks", () => {
    mockUseSelector.mockReturnValue([mockBookData]);

    const { result } = renderHook(() =>
      useBookDetailsView({ bookData: mockBookData }),
    );

    expect(result.current.isBookmarked).toBe(true);
  });

  it("should dispatch addBookmark when handleBookmarkToggle is called and the book is not bookmarked", () => {
    const mockDispatch = jest.fn();
    mockUseDispatch.mockReturnValue(mockDispatch);
    mockUseSelector.mockReturnValue([]);

    const { result } = renderHook(() =>
      useBookDetailsView({ bookData: mockBookData }),
    );

    act(() => {
      result.current.handleBookmarkToggle();
    });

    expect(mockDispatch).toHaveBeenCalledWith(addBookmark(mockBookData));
  });

  it("should dispatch removeBookmark when handleBookmarkToggle is called and the book is bookmarked", () => {
    const mockDispatch = jest.fn();
    mockUseDispatch.mockReturnValue(mockDispatch);
    mockUseSelector.mockReturnValue([mockBookData]);

    const { result } = renderHook(() =>
      useBookDetailsView({ bookData: mockBookData }),
    );

    act(() => {
      result.current.handleBookmarkToggle();
    });

    expect(mockDispatch).toHaveBeenCalledWith(removeBookmark(mockBookData));
  });

  it("should return dark mode icons when isDarkMode is true", () => {
    mockUseIsDarkMode.mockReturnValue({ isDarkMode: true });

    const { result } = renderHook(() =>
      useBookDetailsView({ bookData: mockBookData }),
    );

    expect(result.current.featureIcons).toEqual([
      { icon: "SvgMock", label: "マークシート" },
      { icon: "SvgMock", label: "アプリ学習" },
      { icon: "SvgMock", label: "学習記録" },
      { icon: "SvgMock", label: "音声" },
      { icon: "SvgMock", label: "SWトレ" },
      { icon: "SvgMock", label: "テスト" },
      { icon: "SvgMock", label: "単語一覧" },
    ]);
  });

  it("should return light mode icons when isDarkMode is false", () => {
    mockUseIsDarkMode.mockReturnValue({ isDarkMode: false });

    const { result } = renderHook(() =>
      useBookDetailsView({ bookData: mockBookData }),
    );

    expect(result.current.featureIcons).toEqual([
      { icon: "SvgMock", label: "マークシート" },
      { icon: "SvgMock", label: "アプリ学習" },
      { icon: "SvgMock", label: "学習記録" },
      { icon: "SvgMock", label: "音声" },
      { icon: "SvgMock", label: "SWトレ" },
      { icon: "SvgMock", label: "テスト" },
      { icon: "SvgMock", label: "単語一覧" },
    ]);
  });
});
