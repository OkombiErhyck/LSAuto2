export const INCREMENT_CLICK_COUNT = 'INCREMENT_CLICK_COUNT';

export const incrementClickCount = (placeId) => {
  return {
    type: INCREMENT_CLICK_COUNT,
    payload: {
      placeId
    }
  };
};
