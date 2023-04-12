import type { ContentItem } from "../../pages/home/Home.types";

const initialState: ContentsState = {
  contents: [
    {
      id: 0,
      title: "Video 1",
      youtubeId: "o5MutYFWsM8",
    },
    {
      id: 1,
      title: "Video 2",
      youtubeId: "zFGMLQ3q15c",
    },
    {
      id: 2,
      title: "Video 3",
      youtubeId: "1sUsHK5JlAQ",
    },
    {
      id: 3,
      title: "Video 4",
      youtubeId: "k2TJUMP3bA0",
    },
  ],
};

interface ContentsState {
  contents: ContentItem[];
}

const contents = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default contents;
