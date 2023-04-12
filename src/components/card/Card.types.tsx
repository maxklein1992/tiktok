import type { Like, User } from "../../pages/detail/Detail.types";
import type { ContentItem } from "../../pages/home/Home.types";

export interface Props {
  /**
   * User
   */
  user: User;
  /**
   * Content Item
   */
  content: ContentItem;
  /**
   * Array of likes
   */
  likes: Like[];
  /**
   * Function
   */
  addLike: ({ userId, contentId }) => void;
  /**
   * Function
   */
  deleteLike: ({ userId, contentId }) => void;
  /**
   * Function
   */
  onClick: () => void;
}
