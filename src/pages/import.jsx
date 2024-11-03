import { Button, Stack } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function ImportModule(props) {
    return (
        <div className="importmodule">
            <Stack direction={"column"} spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 25,
                }} >
                <div className="logo"></div>
                <Button color="primary" variant="contained" startIcon={<AddCircleOutlineIcon />}> Import Products</Button>
                <Button color="primary" variant="outlined"> Download sample .CSV</Button>

            </Stack>
        </div>
    )
}