import React, { useState } from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams } from '@material-ui/data-grid'; //gridcoldef and gridvaluegetterparams are new, originally no 'grid' 
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';
import { CarForm } from '../../components/CarForm';

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

interface gridData {
    data: {
        id?: string;
    }
}

export const DataTable = () => {

    let { carData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({ data: {} })
    console.log('This is carData: ', carData)

    let handleOpen = () => {// this is for buttons (update, delete)
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        server_calls.delete(gridData.data.id!)
        getData()
    }
    console.log('This is gridData.data.id: ', gridData.data.id)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Cars In Inventory</h2>
            <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection onRowSelected={setData} />

            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Car</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>Update Car</DialogContentText> */}
                    <CarForm id={gridData.data.id!} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="primary">Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}