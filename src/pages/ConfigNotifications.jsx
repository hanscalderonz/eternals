import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import TableNotifications from '../partials/dashboard/TableNotifications';
import { Menu } from 'antd';
import { Drawer, Button, Space, Input, Checkbox, Row, Col, DatePicker } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

import { Table } from 'antd';
import { IoCalendarOutline } from "react-icons/io5";
import { ImStack, ImFileText2 } from "react-icons/im";
import Edittable from '../partials/dashboard/Edittable';
const { Column } = Table;
const { RangePicker } = DatePicker;
 
                 
function ConfigNotifications() {

    const data = [
        {
          key: '1',
          store: 'OOS',
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
    'Av chilacos',
    'Toberin',
    'Cluster Antioquia'
  ];

const [age, setAge] = React.useState('');
const [a, setA] = React.useState('');


  const handleChangeConfig = (event) => {
    setA(event.target.value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [personName, setPersonName] = React.useState([]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

const handleChangeStore = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
}

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
              <label><b>Tienda</b></label><br/>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Seleccione</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChangeStore}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {stores.map((name) => (
                    <MenuItem key={name} value={name}>
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            
            <div>
              <label><b>Tipo de consulta</b></label><br/>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Seleccione</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={age}
                  onChange={handleChange}
                  autoWidth
                  label="Age"
                >
                  <MenuItem value={10}>Top 20 productos OOS</MenuItem>
                  <MenuItem value={21}>Top 20 productos vendidos</MenuItem>
                  <MenuItem value={22}>Productos de una lista</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
            <div className='flex items-center gap-2 mb-6'>
            <ImFileText2 />
              <p className='mb-0'><b>Reglas de la consulta</b></p>
             </div>  
               
            
            <Edittable />

            </div>

            <div>
              <label><b>Frecuencia de la consulta</b></label><br/>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Seleccione</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={a}
                  onChange={handleChangeConfig}
                  autoWidth
                  label="Age"
                >
                  <MenuItem value={10}>Cada hora</MenuItem>
                  <MenuItem value={21}>Con el evento</MenuItem>
                  <MenuItem value={22}>Hora especifica</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className=' grid grid-cols-3 gap-2 mt-10'>
             <div className='flex items-center gap-2'>
             <IoCalendarOutline />    
             <p className='mb-0'> <b>Hora de la alerta</b></p>
            </div>   
            
            <div className='flex gap-3 '>
               <Input style={{ width: '40%' }} defaultValue="10" />:
               <Input style={{ width: '40%' }} defaultValue="5" />
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

            <div className='grid grid-cols-3 mt-10 gap-5 items-center' >
            <div className='flex items-center gap-2'>
            <IoCalendarOutline /> 
            <p className='mb-0'><b>Alerta Activa</b></p>
            </div>  

            <div>
            <RangePicker
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChange}
            onOk={onOk}
            />  
            </div>

              <div >
                <Checkbox value="PM">Sin vencimiento</Checkbox>
                </div>
            </div>

            <div className='flex items-center mt-10 gap-10'>
                <div className='flex items-center gap-2 '>
                 <ImStack />   
                <p className='mb-0'><b>Canal</b></p>
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

            <div className="flex mt-5 justify-end gap-1">
              <div><Button>Limpiar config</Button></div>
              <div><Button type="primary">Configurar alerta</Button></div>

              
              
            </div>
            
            </Drawer>

            </div>

            <div>
            
           
            </div>
            <div className="grid  gap-6 mt-8">

              <TableNotifications />
           
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default ConfigNotifications;