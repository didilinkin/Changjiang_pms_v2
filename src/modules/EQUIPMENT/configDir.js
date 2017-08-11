// 设备管理 - 目录配置
const EQUIPMENT_DIR = {
    title: '设备管理',
    key: 'equipment',
    path: '/home/equipment',
    icon: 'tool',
    childRoute: [
        {
            title: '设备维保',
            key: 'maintain',
            path: '/home/equipment/maintain',
            ancestor: ['equipment'],
            childRoute: [
                {
                    title: '保养记录',
                    key: 'maintenancePlan',
                    path: '/home/equipment/maintain/maintenancePlan',
                    ancestor: ['equipment', 'maintain'],
                    component: require('./containers/maintain/MaintenancePlan').default
                }, {
                    title: '维修记录',
                    key: 'repairRecord',
                    path: '/home/equipment/maintain/repairRecord',
                    ancestor: ['equipment', 'maintain'],
                    component: require('./containers/maintain/RepairRecord').default
                }
            ]
        }, {
            title: '设备台账',
            key: 'equipmentAccount',
            path: '/home/equipment/equipmentAccount',
            ancestor: ['equipment'],
            component: require('./containers/EquipmentAccount').default
        }, {
            title: '机房管理',
            key: 'computerRoomManagement',
            path: '/home/equipment/computerRoomManagement',
            ancestor: ['equipment'],
            component: require('./containers/ComputerRoomManagement').default
        }, {
            title: '设备巡检',
            key: 'inspection',
            path: '/home/equipment/inspection',
            ancestor: ['equipment'],
            component: require('./containers/Inspection').default
        }
    ]
}
// 详情页路由表
const EQUIPMENT_DETAILS = [
    {
        title: '设备明细',
        key: 'equipmentledgerDetails',
        path: '/home/equipment/Details/equipmentledgerDetails/:id',
        component: require('./containers/details/EquipmentAccount/EquipmentledgerDetails').default
    },
    {
        title: '机房明细',
        key: 'ServerRoomDetails',
        path: '/home/equipment/Details/serverRoomDetails/:id',
        component: require('./containers/details/ComputerRoomManagement/ServerRoomDetails').default
    }
]
export { EQUIPMENT_DIR, EQUIPMENT_DETAILS }
