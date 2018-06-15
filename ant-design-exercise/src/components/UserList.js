import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button ,Dropdown,Menu,Icon} from 'antd';

const UserList = ({ onDelete, users })=>{
  const columns =[
    {
      title:'姓名',
      dataIndex:'name'
    },
    {
      title:'id',
      dataIndex:'id'
    },
    {
      title:'Action',
      render:(text,record)=>{
        return (
          <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      }
    }
  ];
  const SubMenu= Menu.SubMenu;
  function onClick({key}) {
    alert('click...通过Menu.Item的key进行');
  }
  const menu = (
    <Menu onClick={onClick}>
    <Menu.Item key='1'><a>1111</a></Menu.Item>
    <Menu.Item key='2'><a>2222</a></Menu.Item>
      <Menu.Divider />
    <Menu.Item key='3'><a>3333</a></Menu.Item>
      <Menu.Divider />
      <SubMenu title='submenu' disabled>
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.Item key='4'>555</Menu.Item>
      </SubMenu>
  </Menu>);
  return (
    <div>
      <Table dataSource={users} columns={columns}/>
      <Dropdown overlay={menu} placement='bottomLeft' trigger={['click']}>
        <a className="ant-dropdown-link">lalala<Icon type='down'/></a>
      </Dropdown>
    </div>
  );
};

UserList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};
export default UserList;
