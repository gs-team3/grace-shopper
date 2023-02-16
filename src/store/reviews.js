import axios from "axios";

export const fetchReviews = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/products/${id}/reviews`, {
      where: {
        productId: id,
      },
    });
    dispatch({ type: "SET_REVIEWS", reviews: response.data });
  };
};

export const addReview = (review) => {
  return (dispatch) => {
    axios
      .post(`/api/products/${review.productId}/reviews`, review)
      .then((res) => {
        dispatch({ type: "ADD_REVIEW", review: res.data });
      })
      .catch((error) => {
        console.log("Could not add review", error.message);
      });
  };
};

export default function reviews(state = [], action) {
  if (action.type === "SET_REVIEWS") {
    const setReview = action.reviews;
    return [...state, setReview];
    // return action.reviews;
  }
  if (action.type === "ADD_REVIEW") {
    const newReview = action.review;
    return [...state, newReview];
  }
  return state;
}