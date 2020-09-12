/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Table, Space, Pagination } from 'antd';
import { StateContext } from '../StateProvider.js';

const { Column, ColumnGroup } = Table;

function Shippings(props) {
    // eslint-disable-next-line no-unused-vars
    const [data, setdata] = useContext(StateContext);
    return (
        <Table dataSource={data} className="table__body" defaultCurrent={1} total={5}>
            <ColumnGroup>
                <Column title="First Name" dataIndex="username" key={data.id} />
                <Column title="Last Name" dataIndex="name" key={data.id} />
            </ColumnGroup>
            <Column title="Phone" dataIndex="phone" key={data.id} />
            <Column title="Address" dataIndex="address" key={data.id} />
            {/* <Column
                title="Tags"
                dataIndex="company"
                key={data.id}
                render={company => (
                    <>
                        {company.map(tag => (
                            <Tag color="blue" key={data.id}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            /> */}
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
            <Pagination defaultCurrent={1} total={5} />
        </Table> 
    );
}

export default Shippings;
