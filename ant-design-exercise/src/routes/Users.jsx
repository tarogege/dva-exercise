import React from 'react';
import UserList from '../components/UserList';
import {connect} from 'dva';
import {PropTypes} from 'prop-types';

const Users = ({dispatch,users}) => {
  function handleDelete(id) {
    dispatch({
      type: 'users/delete',
      payload: id,
    });
  }
  const usersProps ={
    users: users
  }
  return (
    <div>
      <UserList onDelete={handleDelete} {...usersProps}></UserList>
    </div>);
};
Users.propTypes = {
  users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {users:state.users};
}
export default connect(mapStateToProps)(Users);
