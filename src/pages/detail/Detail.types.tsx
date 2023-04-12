import { ContentItem } from "../home/Home.component";

export interface Props {
  /**
   * Array of content items
   */
  contents: ContentItem[];
  /**
   * Array of comments
   */
  comments: Comment[];
  /**
   * Array of likes
   */
  likes: Like[];
  /**
   * User
   */
  user: User;
  /**
   * Function
   */
  addLike: ({ userId, contentId }) => void;
  /**
   * Function
   */
  deleteLike: ({ userId, contentId }) => void;
}

export interface User {
  /**
   * Id
   */
  id: number;
  /**
   * Name
   */
  name: string;
}

export interface Comment {
  /**
   * Content id
   */
  contentId: number;
  /**
   * Name of user
   */
  userName: string;
  /**
   * Description of comment
   */
  title: string;
}

export interface Like {
  /**
   * Content id
   */
  contentId: number;
  /**
   * User id
   */
  userId: number;
}
