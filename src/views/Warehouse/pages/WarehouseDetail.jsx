// 客户管理 - 客户报修
import React, {Component} from 'react'
import {Table, Spin} from 'antd'
import { apiPost } from '../../../api'
// 引入组件

// React component
class WarehouseDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loading: false,
            visible: false,
            columns: [],
            dataSource: []
        }
    }
    async initialRemarks () {
        let result = await apiPost(
            '/warehouse/getWarehouseDetail',
            {'warehouseId': this.props.match.params.id}
        )
        this.setState({
            loading: false,
            columns: [{
                title: '序号',
                width: 80,
                dataIndex: 'id',
                key: 'id'
            }, {
                title: '出入库日期 ',
                width: 150,
                dataIndex: 'warehouseDate',
                key: 'warehouseDate'
            }, {
                title: '类型',
                width: 100,
                dataIndex: 'warehouseType',
                key: 'warehouseType',
                render: function (text, record, index) {
                    let warehouseType = '入库'
                    if (record.warehouseType === 1) {
                        warehouseType = '出库'
                    }
                    return (
                        <span>{warehouseType}</span>
                    )
                }
            }, {
                title: '凭证号',
                width: 150,
                dataIndex: 'voucherNo',
                key: 'voucherNo'
            }, {
                title: '数量',
                width: 150,
                dataIndex: 'number',
                key: 'number'
            }, {
                title: '金额',
                width: 100,
                dataIndex: 'amount',
                key: 'amount'
            }, {
                title: '备注',
                width: 100,
                dataIndex: 'remark',
                key: 'remark'
            }, {
                title: '采购人',
                width: 100,
                dataIndex: 'purchase',
                key: 'purchase'
            }, {
                title: '验收人',
                width: 100,
                dataIndex: 'acceptor',
                key: 'acceptor'
            }, {
                title: '领用人',
                width: 100,
                dataIndex: 'recipient',
                key: 'recipient'
            }, {
                title: '操作人',
                width: 100,
                dataIndex: 'createBy',
                key: 'createBy'
            }, {
                title: '操作时间',
                width: 150,
                dataIndex: 'createDate',
                key: 'createDate'
            }, {
                title: '操作',
                width: 200,
                dataIndex: 'fileUrl',
                key: 'fileUrl'
            }],
            dataSource: result.data
        })
    }
    componentDidMount () {
        this.initialRemarks()
    }
    refresh = async () => {
        // 刷新表格
        let result = await apiPost(
            '/warehouse/inventoryManage',
            {'storeroomType': this.storeroomType,
                'materialName': this.materialName,
                'storagePlace': this.storagePlace
            }
        )
        this.setState({
            openinvalid: false,
            opendispatch: false,
            openWarehouseDetail: false,
            openUpdate: false,
            dataSource: result.data,
            id: 0
        })
    }
    render () {
        return (
            <div>
                <Spin spinning={this.state.loading}>
                    <Table
                        scroll={{ x: 1300 }}
                        dataSource={this.state.dataSource}
                        columns={this.state.columns}
                    />
                </Spin>
            </div>
        )
    }
}
export default WarehouseDetail

