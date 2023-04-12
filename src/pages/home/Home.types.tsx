export interface Props {
  /**
   * Array of content items
   */
  contents: ContentItem[];
}

export interface ContentItem {
  /**
   * Id
   */
  id: number;
  /**
   * Title
   */
  title: string;
  /**
   * Id of youtube video
   */
  youtubeId: string;
}
