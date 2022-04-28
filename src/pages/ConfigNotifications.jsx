import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import TableNotifications from '../partials/dashboard/TableNotifications';
import { Menu } from 'antd';
import { Drawer, Button, Space, Radio, Input, Checkbox, Row, Col, DatePicker } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import { MultiSelect } from 'primereact/multiselect';
import { Table } from 'antd';
import { IoCalendarOutline } from "react-icons/io5";
import { ImStack, ImFileText2 } from "react-icons/im";
const { Column, ColumnGroup } = Table;
const { RangePicker } = DatePicker;
 
                 
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

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  function onChangeDate(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  function onOk(value) {
    console.log('onOk: ', value);
  }
  
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
            
            <Drawer
             title="Configurar nueva alerta" size={size} placement="right" onClose={onClose} visible={visible}>
            <div>
                <p>Tienda</p>
            </div> 

            <div>
            <div className='flex items-center gap-2 mb-6'>
            <ImFileText2 />
              <p className='mb-0'>Reglas de la consulta</p>
             </div>  
               
              <Table pagination={false} dataSource={data}>
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

            <div className=' grid grid-cols-3 gap-2 mt-10'>
             <div className='flex items-center gap-2'>
             <IoCalendarOutline />    
             <p className='mb-0'> Frecuencia de la consulta</p>    
            </div>   
            
            <div className='flex gap-3 '>
               <Input style={{ width: '40%' }} defaultValue="10:00" />:   
               <Input style={{ width: '40%' }} defaultValue="5:00" />   
            </div>

            <div className='flex items-center'>
            <Checkbox.Group onChange={onChange}>
            <Row>
            <Col>
                <Checkbox value="AM">AM</Checkbox>
            </Col>
            <Col>
                <Checkbox value="PM">PM</Checkbox>
            </Col>
            </Row>
        </Checkbox.Group>   
            </div>

            </div>

            <div className='grid grid-cols-3 mt-10' >
            <div className='flex items-center gap-2'>
            <IoCalendarOutline /> 
            <p className='mb-0'>Alerta Activa</p>    
            </div>  

            <div>
            <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
            />  
            </div>          
            </div>

            <div className='flex items-center mt-10 gap-10'>
                <div className='flex items-center gap-2 '>
                 <ImStack />   
                <p className='mb-0'>Canal</p>    
                </div>
                <div className='flex items-center'>
                <Checkbox.Group onChange={onChange}>
                <Row className='flex gap-6'>
                <Col>
                    <Checkbox value="AM">Whatsapp</Checkbox>
                </Col>
                <Col>
                    <Checkbox value="PM">SMS</Checkbox>
                </Col>
                <Col>
                    <Checkbox value="EM">Email</Checkbox>
                </Col>

                <Col>
                <Checkbox value="ND">Notification Desktop</Checkbox>
                </Col>
                </Row>
            </Checkbox.Group>   
            </div>
                    

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