import { useDispatch, useSelector } from "react-redux";
import Marksheet from "../../assets/svg/light/icon_study_marksheet.svg";
import Quiz from "../../assets/svg/light/icon_study_quiz.svg";
import Record from "../../assets/svg/light/icon_study_record.svg";
import Sound from "../../assets/svg/light/icon_study_sound.svg";
import Sw from "../../assets/svg/light/icon_study_sw.svg";
import Test from "../../assets/svg/light/icon_study_test.svg";
import Vocab from "../../assets/svg/light/icon_study_vocab.svg";
import DarkMarksheet from "../../assets/svg/dark/icon_study_marksheet.svg";
import DarkQuiz from "../../assets/svg/dark/icon_study_quiz.svg";
import DarkRecord from "../../assets/svg/dark/icon_study_record.svg";
import DarkSound from "../../assets/svg/dark/icon_study_sound.svg";
import DarkSw from "../../assets/svg/dark/icon_study_sw.svg";
import DarkTest from "../../assets/svg/dark/icon_study_test.svg";
import DarkVocab from "../../assets/svg/dark/icon_study_vocab.svg";
import {
  addBookmark,
  removeBookmark,
} from "../../store/reducer/bookmarksSlice";
import { RootState } from "../../store/store";
import { useIsDarkMode } from "../../hooks/useIsDarkMode";

import { useMemo } from "react";
import { Book } from "../../store/rtkEndPoints/bookApi.types";

type UseBookDetailsViewParams = {
  bookData: Book | null;
};

export const useBookDetailsView = ({ bookData }: UseBookDetailsViewParams) => {
  const { isDarkMode } = useIsDarkMode();

  const dispatch = useDispatch();
  const bookmarks = useSelector(
    (state: RootState) => state.bookmarks.bookmarks,
  );
  const isBookmarked = bookmarks.some(
    (book) => book.id_book === bookData?.id_book,
  );

  const handleBookmarkToggle = () => {
    if (!bookData) return;
    if (isBookmarked) {
      dispatch(removeBookmark(bookData));
    } else {
      dispatch(addBookmark(bookData));
    }
  };

  const featureIcons = useMemo(
    () => [
      { icon: isDarkMode ? DarkMarksheet : Marksheet, label: "マークシート" },
      { icon: isDarkMode ? DarkQuiz : Quiz, label: "アプリ学習" },
      { icon: isDarkMode ? DarkRecord : Record, label: "学習記録" },
      { icon: isDarkMode ? DarkSound : Sound, label: "音声" },
      { icon: isDarkMode ? DarkSw : Sw, label: "SWトレ" },
      { icon: isDarkMode ? DarkTest : Test, label: "テスト" },
      { icon: isDarkMode ? DarkVocab : Vocab, label: "単語一覧" },
    ],
    [isDarkMode],
  );

  return { featureIcons, handleBookmarkToggle, isBookmarked };
};
