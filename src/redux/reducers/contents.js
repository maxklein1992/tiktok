const initialState = {
  contents: [
    {
      id: 0,
      title: "Video 1",
      url: "",
    },
    {
      id: 1,
      title: "Video 2",
      url: "",
    },
    {
      id: 2,
      title: "Video 3",
      url: "",
    },
    {
      id: 3,
      title: "Video 4",
      url: "",
    },
  ],
};

const contents = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default contents;
