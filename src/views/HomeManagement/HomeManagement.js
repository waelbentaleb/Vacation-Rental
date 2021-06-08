import React, { useState } from 'react';
import Highlighter from 'react-highlight-words';
import { Table, Input, Button, Space, DatePicker, Modal } from 'antd';
import { SearchOutlined, PlusOutlined, CalendarOutlined, UnorderedListOutlined, SettingOutlined, DeleteOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import HomeModalContent from './components/HomeModalContent'


const { RangePicker } = DatePicker;


function HomeManagement(props) {

    // state = {
    //   searchText: '',
    //   searchedColumn: '',
    // };

    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([
        {
            key: '1',
            referance: "1011",
            region: "Sahloul",
            type: "s+2",
            price: "130 dt",
            description: "haut stauding",

        },
        {
            key: '2',
            referance: "1012",
            region: "Hammam Sousse",
            type: "s+2",
            price: "90 dt",
            description: "avec jardin",

        },
        {
            key: '3',
            referance: "1013",
            region: "Hammam Sousse",
            type: "s+0",
            price: "50 dt",
            description: "---------",

        },
        {
            key: '4',
            referance: "1014",
            region: "Khzema",
            type: "s+1",
            price: "70 dt",
            description: "---------",

        },
        {
            key: '5',
            referance: "1017",
            region: "Kantawi",
            type: "s+2",
            price: "180 dt",
            description: "400 metre au plage",

        },
    ]);


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

    const getPriceSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 5 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Enter price interval`}
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

    // Modal functions *********
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleAddHome = (values) => {
        console.log(values)

        const newData = [...data, values]
        setData(newData)

        setIsModalVisible(false);
    }

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
            width: '10%',
        },
        {
            title: 'Prix/Nuit',
            dataIndex: 'price',
            key: 'price',
            width: '15%',
            ...getPriceSearchProps('price'),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: '20%',
            ...getColumnSearchProps('description'),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button type="primary" shape="circle" icon={<CalendarOutlined />} />
                    <Button type="primary" shape="circle" icon={<UnorderedListOutlined />} />
                    <Button type="primary" shape="circle" icon={<SettingOutlined />} />
                    <Button type="primary" shape="circle" icon={<DeleteOutlined />} />
                </Space>
            ),
        },
    ];

    return (
        <div>
            <Space direction="vertical" size={12}>
                <RangePicker />
            </Space>

            <Button type="primary" shape="round" icon={<PlusOutlined />} onClick={showModal}>
                Ajoute une maison
            </Button>

            <Table columns={columns} dataSource={data} />

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <HomeModalContent onAddHome={(values) => { handleAddHome(values) }} />
            </Modal>
        </div>
    )

}



export default HomeManagement;