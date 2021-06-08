import React, { useState } from 'react';
import { Table, Input, Button, Space, DatePicker } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';


import 'antd/dist/antd.css';
import './App.css';

const data = [
  {
    key: '1',
    referance: "1011",
    region: "Sahloul",
    type: "s+2",
    prixNuit: "130 dt",
    dsecription: "haut stauding",

  },
  {
    key: '2',
    referance: "1012",
    region: "Hammam Sousse",
    type: "s+2",
    prixNuit: "90 dt",
    dsecription: "avec jardin",

  },
  {
    key: '3',
    referance: "1013",
    region: "Hammam Sousse",
    type: "s+0",
    prixNuit: "50 dt",
    dsecription: "---------",

  },
  {
    key: '4',
    referance: "1014",
    region: "Khzema",
    type: "s+1",
    prixNuit: "70 dt",
    dsecription: "---------",

  },
  {
    key: '5',
    referance: "1017",
    region: "Kantawi",
    type: "s+2",
    prixNuit: "180 dt",
    dsecription: "400 metre au plage",

  },
]

const { RangePicker } = DatePicker;


function App(props) {





  // state = {
  //   searchText: '',
  //   searchedColumn: '',
  // };

  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')

  let searchInput

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`menlawejchi 3ala ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              // this.setState({
              //   searchText: selectedKeys[0],
              //   searchedColumn: dataIndex,
              // });
              setSearchText(selectedKeys[0])
              setSearchedColumn(dataIndex)
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    // this.setState({
    //   searchText: selectedKeys[0],
    //   searchedColumn: dataIndex,
    // });
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  };

  const handleReset = clearFilters => {
    clearFilters();
    // this.setState({ searchText: '' });

    setSearchText('')
  };


  const columns = [
    {
      title: 'Referance',
      dataIndex: 'referance',
      key: 'referance',
      width: '10%',
      ...getColumnSearchProps('referance'),
    },
    {
      title: 'Region',
      dataIndex: 'region',
      key: 'region',
      width: '20%',
      ...getColumnSearchProps('region'),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      ...getColumnSearchProps('type'),
      width: '20%',
    },
    {
      title: 'Prix/Nuit',
      dataIndex: 'prixNuit',
      key: 'prixNuit',
      width: '20%',
      ...getColumnSearchProps('prixNuit'),
    },
    {
      title: 'Description',
      dataIndex: 'dsecription',
      key: 'dsecription',
      width: '20%',
      ...getColumnSearchProps('dsecription'),
    },

  ];

  return (
    <div>

      <Space direction="vertical" size={12}>
        <RangePicker />
      </Space>
      <Button type="primary" shape="round" icon={<PlusOutlined />} size='large'>
        Ajoute une maison
        </Button>
      <Table columns={columns} dataSource={data} />
    </div>
  )

}



export default App;
