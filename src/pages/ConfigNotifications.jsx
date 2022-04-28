import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import TableNotifications from '../partials/dashboard/TableNotifications';
import { Menu } from 'antd';
import { Drawer, Button, Space, Radio } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import { MultiSelect } from 'primereact/multiselect';
import { Table } from 'antd';

const { Column, ColumnGroup } = Table;
 
                 
                  
function ConfigNotifications() {

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
        

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const [selectedStores, setSelectedStores] = useState(null);
  

  const showDrawer = () => {
    setVisible(true);
    setSize('large');
  };

  const onClose = () => {
    setVisible(false);
  };
  const stores = [
    { name: 'Av chilacos', code: 'ac' },
    { name: 'Toberin', code: 'tb' },
    { name: 'Cluster Antioquia', code: 'ca' }
];



  return (
    <div className="flex h-screen overflow-hidden">

    
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header title="Out of Stock Alerts" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          
            <div className="flex justify-between gap-10">
            <div className="w-5/6">
            <Menu mode='horizontal' defaultSelectedKeys={['active']}>
            <Menu.Item key="active">
            Active
            </Menu.Item>
            <Menu.Item key="disabled">
            Disabled
            </Menu.Item>
            </Menu>
            <hr />
                
            </div>
            <div>
            <Button 
            style={{
             paddingBottom:'36px',
             paddingTop: '12px'   
            }}
            size='large'
            icon={<PlusOutlined style={{
            fontSize:'24px'
            }} />}
            type="primary" onClick={showDrawer}>
             Configurar nueva alerta
            </Button>
            </div>
            
            <Drawer title="Configurar nueva alerta" size={size} placement="right" onClose={onClose} visible={visible}>
            <div>
                <p>Tienda</p>
            </div> 

            <div>
              <p>Reglas de la consulta</p>
              <Table dataSource={data}>
                <Column title="Variable" dataIndex="key" key="key" />
                <Column title="Valor" dataIndex="store" key="store" />        
                <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    <a>Delete</a>
                    </Space>
                )}
                />
            </Table>

            </div>
            
            </Drawer>

            </div>

            <div>
            
           
            </div>
            <div className="grid  gap-6 mt-8">

              
              {/* Bar chart (Direct vs Indirect) */}
              <TableNotifications />
           
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default ConfigNotifications;