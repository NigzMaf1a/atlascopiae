import Data from "./types"
import { DesignationStatus } from "../interfaces/designation"
import { RestockRequestStatus, RestockRequestType } from "../interfaces/restockrequest"
import { RestockRequestItemStatus } from "../interfaces/restockrequestitem"

const data: Data = {
    designations: [
        { desId: 1, desRef: 'FR67UT91', desDesc: 'Blah', desStatus: DesignationStatus.Active },
        { desId: 2, desRef: 'FR67UT92', desDesc: 'Blah', desStatus: DesignationStatus.Active },
        { desId: 3, desRef: 'FR67UT93', desDesc: 'Blah', desStatus: DesignationStatus.Active }
    ],

    stores: [
        { storeId: 1, storeRef: 'ST23GH01', storeLocation: 'Unknown', storeStatus: DesignationStatus.Active, desId: 1 },
        { storeId: 2, storeRef: 'ST23GH01', storeLocation: 'Unknown', storeStatus: DesignationStatus.Active, desId: 2 },
        { storeId: 3, storeRef: 'ST23GH01', storeLocation: 'Unknown', storeStatus: DesignationStatus.Inactive, desId: 3 },
        { storeId: 4, storeRef: 'ST23GH01', storeLocation: 'Unknown', storeStatus: DesignationStatus.Inactive, desId: 4 }
    ],

    items: [
        { itemId: 1, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 2, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 3, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 4, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 5, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 6, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 7, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 8, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 9, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' },
        { itemId: 10, itemImgUrl: './favicon.svg', itemRef: 'IT25GH01', itemValue: 250, itemName: 'Maize meal', itemDesc: 'Pure maize meal' }
    ],

    storeditems: [
        { storedItemId: 1, storeId: 1, itemId: 1, itemQty: 5000 },
        { storedItemId: 2, storeId: 1, itemId: 2, itemQty: 2000 },
        { storedItemId: 3, storeId: 2, itemId: 3, itemQty: 7000 },
        { storedItemId: 4, storeId: 2, itemId: 4, itemQty: 5000 },
        { storedItemId: 5, storeId: 2, itemId: 5, itemQty: 5000 }
    ],

    storeworth: [
        { storeId: 1, storeWorth: 250000, timestamp: new Date() },
        { storeId: 2, storeWorth: 350000, timestamp: new Date() },
        { storeId: 3, storeWorth: 450000, timestamp: new Date() },
        { storeId: 4, storeWorth: 550000, timestamp: new Date() }
    ],

    storeworthdaily: [
        { storeWorthDailyId: 1, storeId: 1, storeWorth: 250000, date: new Date() },
        { storeWorthDailyId: 2, storeId: 2, storeWorth: 350000, date: new Date() },
        { storeWorthDailyId: 3, storeId: 3, storeWorth: 450000, date: new Date() },
        { storeWorthDailyId: 4, storeId: 4, storeWorth: 550000, date: new Date() }
    ],

    restock: [
        { resReqId: 1, storeId: 1, reqType: RestockRequestType.Add, reqStatus: RestockRequestStatus.Approved, reqDate: new Date(), reqTotal: 25000 },
        { resReqId: 2, storeId: 1, reqType: RestockRequestType.Add, reqStatus: RestockRequestStatus.Pending, reqDate: new Date(), reqTotal: 25000 },
        { resReqId: 3, storeId: 1, reqType: RestockRequestType.Sub, reqStatus: RestockRequestStatus.Pending, reqDate: new Date(), reqTotal: 25000 },
        { resReqId: 4, storeId: 1, reqType: RestockRequestType.Sub, reqStatus: RestockRequestStatus.Pending, reqDate: new Date(), reqTotal: 25000 }
    ],

    restockitems: [
        { resReqItemId: 1, resReqId: 1, itemId: 1, reqQty: 200, reqTotal: 50000, resReqItemStatus: RestockRequestItemStatus.Approved },
        { resReqItemId: 2, resReqId: 2, itemId: 2, reqQty: 100, reqTotal: 25000, resReqItemStatus: RestockRequestItemStatus.Approved },
        { resReqItemId: 1, resReqId: 2, itemId: 2, reqQty: 100, reqTotal: 25000, resReqItemStatus: RestockRequestItemStatus.Pending },
        { resReqItemId: 1, resReqId: 2, itemId: 2, reqQty: 100, reqTotal: 25000, resReqItemStatus: RestockRequestItemStatus.Pending }
    ]
}

export default data