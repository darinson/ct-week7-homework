import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 500 },
    { field: 'make', headerName: 'Make', width: 200 },
    { field: 'model', headerName: 'Model', width: 200 },
    { field: 'year', headerName: 'Year', type: 'string', width: 200 },
    { field: 'condition', headerName: 'Car Condition', type: 'string', width: 200 },
    {
        field: 'cost', headerName: 'Price', description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
    },
];

export const DataTable = () => {

    let { carData, getData } = useGetData();

    console.log(carData)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Cars in Inventory</h1>
            <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection ></DataGrid>
        </div>
    )
}