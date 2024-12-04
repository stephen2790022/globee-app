export interface Book {
  author: string;
  content_type: string;
  create_at: string;
  has_contents: number;
  has_purchased: boolean;
  id_book: string;
  img_url: string;
  is_unlimited: number;
  name_book: string;
  publisher: string;
  has_mock_exam?: boolean;
}

export interface SubCategory {
  book_list: Book[];
  id_category: string;
  is_ranking?: boolean;
  name_category: string;
  need_load_more: boolean;
}

export interface TopCategory {
  id_top_category: string;
  is_focused: boolean;
  name_category: string;
  sub_category_list: SubCategory[];
}

export interface BooksApiResponse {
  top_category_list: TopCategory[];
}

export type ErrorType = {
  message: string;
};
