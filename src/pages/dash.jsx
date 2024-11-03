import { Button, Divider, Popover, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

const ProductTitle = ({ name, row }) => {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: "start",
                alignItems: "center",
            }}
        >
            <img alt='thumbnail.jpg' className='x50' src={row.thumbnail} />
            <span>{name}</span>
        </Stack>
    );
};

const TblProductStatus = (props) => {
    if (props.value === "Low Stock") {
        return <span className='tblStatusInactive'>Inactive</span>
    } else {
        return <div className='tblStatusActive'><div className='dot'></div>Active</div>
    }
}

const TblProductQuantity = (props) => {
    if (props.value < 5) {
        return <span className='tblStatusInactive'>{props.value}</span>
    } else {
        return <div className='tblStatusActive'>{props.value}</div>
    }
}

function Dash(props) {
    const [rowData, setRowData] = useState([]);


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Products',
            width: 500,
            editable: true,
            renderCell: (params) => <ProductTitle name={params.value} row={params.row} />,
        },
        {
            field: 'category',
            headerName: 'category',
            width: 150,
            editable: true,
        },
        {
            field: 'sku',
            headerName: 'SKU',
            width: 100,
            editable: true,
        },
        {
            field: 'stock',
            headerName: 'Quantity',
            width: 150,
            editable: true,
            renderCell: (params) => <TblProductQuantity {...params} />
        },
        {
            field: 'price',
            headerName: 'Price ($)',
            width: 150,
            editable: true,
        },
        {
            field: 'availabilityStatus',
            headerName: 'status',
            width: 150,
            editable: true,
            renderCell: (params) => <TblProductStatus {...params} />
        },
        {
            field: 'Options',
            width: 100,
            renderCell: (params) => <TblProductOptions {...params} />
        },
    ];

    const TblProductOptions = (props) => {
        const [anchorEl, setAnchorEl] = useState(null);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (
            <>
                <Button onClick={handleClick}>..</Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Stack
                        direction="column"
                        sx={{
                            justifyContent: "start",
                            alignItems: "center",
                            borderRadius: 20
                        }}
                    >
                        <Stack direction="row" sx={{
                            justifyContent: "start",
                            alignItems: "center",
                            color: '#aaa',
                        }}>
                            <NotificationsIcon />
                            <span>Adjust Stock</span>
                        </Stack>
                        <Button variant='text' color='primary'>Adjust stock</Button>
                        <Button variant='text' color='primary'>Edit reorder point</Button>
                        <Button variant='text' color='primary' startIcon={<NotificationsIcon />}>Edit alert settings</Button>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ borderColor: 'primary.main', borderWidth: 1 }}
                        />
                        <Button variant='text' color='error'>Delete Item</Button>
                    </Stack>
                </Popover>
            </>
        )
    }


    useEffect(() => {
        fetch("https://dummyjson.com/products").then(async res => {
            let data = await res.json()
            setRowData(data.products);
        }).catch(err => console.log(err))
    }, [])
    return (
        <>
            <div className="component5">
                <DataGrid
                    rows={rowData}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 15,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    pagination
                    rowHeight={50}
                />
            </div>
        </>
    )
}

export default Dash;