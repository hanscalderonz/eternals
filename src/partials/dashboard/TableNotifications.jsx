import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag, Space } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    store: 'Toberin',
    notification: 'Whatsapp',
    frequency: 'Con el evento de no encontrado',
    date: '20/07/2022',
  },
  {
    key: '2',
    store: 'Toberin',
    notification: 'Whatsapp',
    frequency: 'Con el evento de no encontrado',
    date: '20/07/2022',
    
  },
  {
    key: '3',
    store: 'Toberin',
    notification: 'Whatsapp',
    frequency: 'Con el evento de no encontrado',
    date: '20/07/2022',
    
  },
];

export default () => (
  <Table dataSource={data}>
      <Column title="ID" dataIndex="key" key="key" />
      <Column title="Store" dataIndex="store" key="store" />
      <Column title="Notification" dataIndex="notification" key="notification" />
      <Column title="Frequency" dataIndex="frequency" key="frequency" />
     
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
          <a> Disable</a>
        </Space>
      )}
    />
  </Table>
);