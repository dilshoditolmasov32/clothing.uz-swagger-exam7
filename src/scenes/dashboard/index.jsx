import { useEffect, useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { tokens } from "../../theme";
import Table from "../../components/table/products-table";
import Modal from "../../components/modal/products-modal";
import product from "../../api/product";  
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [params, setParams] = useState({
    page: 1,
    limit: 2,
  });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const response = await product.get(params);
      if (response.status === 200 && response?.data?.products) {
        setData(response?.data?.products);
        let count = Math.ceil(response?.data?.total_count / params.limit);
        setTotal(count);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [params]);

  const handleChange = (event, value) => {
    setParams({
     ...params,
     page:value
    })
   };

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <Box m="20px">
        <div className="flex justify-end ">
          <Button
            variant="contained"
            sx={{
              bgcolor: colors.blueAccent[700],
              color: "#fcfcfc",
              fontWeight: "bold",
              p: "10px 20px",
              mt: "18px",
              transition: ".3s ease",
              ":hover": {
                bgcolor: colors.blueAccent[800],
              },
            }}
            onClick={() => setOpen(true)}
          >
            Add a new products
          </Button>
        </div>
        <Box
          mt="40px"
          height="75vh"
          flex={1}
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              border: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-iconSeparator": {
              color: colors.primary[100],
            },
          }}
        >
          <Table data={data} />
        </Box>
        <Pagination
        className="flex justify-end m-5 text-3xl"
        count={total}
        page={params.page}
        onChange={handleChange}
        sx={{ marginTop: "25px", fontSize:"40px", }}
      />
      </Box>

     
    </>
  );
};

export default Team;
