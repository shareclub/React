import React from 'react'
import { Table } from 'antd';
import './lists.css'

class Lists extends React.Component {

    render(){
        const columns = [
            {
              title: '招聘职位',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '公司',
              dataIndex: 'company',
              key: 'age',
            },
            {
              title: '地址',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: '薪资',
              dataIndex: 'salary',
              key: 'salary',
            },
            {
                title: '日期',
                dataIndex: 'data',
                key: 'data',
              },
          ];
        return (
            <div>
                <Table 
                columns={columns} 
                dataSource={this.props.location.state}
                pagination={{ pageSize: 12 }}
                
                />
            </div>
        );
    }
}

export default Lists;