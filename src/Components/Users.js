/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Table, Space } from 'antd';
import { StateContext } from '../StateProvider.js';

const { Column, ColumnGroup } = Table;

function Users(props) {
  // eslint-disable-next-line no-unused-vars
  const [data, setdata] = useContext(StateContext);
  return (
      <Table dataSource={data} className="table__body">
          <ColumnGroup>
              <Column title="Username" dataIndex="username" key={data.id} />
              <Column title="Name" dataIndex="name" key={data.id} />
          </ColumnGroup>
          <Column title="Phone" dataIndex="phone" key={data.id} />
          <Column title="Address" dataIndex="address" key={data.id} />
          <Column
              title="Action"
              key={data.id}
              render={(text, record) => (
                  <Space size="middle">
                      <a>Invite {record.username}</a>
                      <a>Delete</a>
                  </Space>
              )}
          />
      </Table> 
  );
}

export default Users;
