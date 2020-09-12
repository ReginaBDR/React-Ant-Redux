/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import './Table.css';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';
import { StateContext } from '../StateProvider.js';

const { Column, ColumnGroup } = Table;

function Shippings() {
    // eslint-disable-next-line no-unused-vars
    const [info, setInfo] = useContext(StateContext);
    return (
        <Table dataSource={info} className="table__body">
            <ColumnGroup>
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup>
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                        {tags.map(tag => (
                            <Tag color="blue" key={tag}>
                                {tag}
                            </Tag>
                        ))}
                    </>
                )}
            />
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                        <a>Invite {record.lastName}</a>
                        <a>Delete</a>
                    </Space>
                )}
            />
        </Table> 
    );
}

export default Shippings;
