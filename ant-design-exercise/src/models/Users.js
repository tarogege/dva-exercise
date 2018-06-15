
export default {
  namespace: 'users',
  state: {
    list: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
},
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
    querySuccess(state) {
      return [...state];
    }
  },
  subscriptions:{
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'querySuccess',
            payload: {}
          });
        }
      });
    },
  }
};
