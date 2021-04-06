import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

/* #region  Dishes fetching */
export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());

  return fetch(baseUrl + 'dishes/get/', { crossDomain: true })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes.dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (err) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: err
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});
/* #endregion */

/* #region  Comments fetching */

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comments/get', { crossDomain: true })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments.comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
}

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});
export const commentsFailed = (err) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: err
});

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments/post/', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json'
    },
    crossDomain: true
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post comment ', error.message) });
}
/* #endregion */

/* #region  Promotions fetching */

export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());

  return fetch(baseUrl + 'promotions/get/', { crossDomain: true })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromotions(promos.promotions)))
    .catch(error => dispatch(promotionsFailed(error.message)));
}

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promotionsFailed = (err) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: err
});

export const addPromotions = (promotions) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promotions
});
/* #endregion */

/* #region  Leaders fetching */
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  return fetch(baseUrl + 'leaders/get/', { crossDomain: true })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders.leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (err) => ({
  type: ActionTypes.LEADERS_FAILED,
  payload: err
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders
});
/* #endregion */

/* #region  Feedback fetching */

export const postFeedback = (values) => (dispatch) => {
  const newFeedback = {
    firstname: values.firstname,
    lastname: values.lastname,
    telnum: values.telnum,
    email: values.email,
    agree: values.agree,
    contactType: values.contactType,
    message: values.message
  }
  newFeedback.date = new Date().toISOString();

  return fetch(baseUrl + 'feedback/post/', {
    method: 'POST',
    body: JSON.stringify(newFeedback),
    headers: {
      'Content-Type': 'application/json'
    },
    crossDomain: true
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(response => { alert(JSON.stringify(response)) })
    .catch(error => { console.log('Post Feedback ', error.message) });
}
/* #endregion */