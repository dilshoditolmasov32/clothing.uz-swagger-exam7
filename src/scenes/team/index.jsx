import { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { Box, Button, useTheme } from "@mui/material";
import Table from "../../components/table/category-table";
import categoreis from "../../api/categoreis";
import Modal from "../../components/modal/category-modal";
import { toast } from "react-toastify";

const Index = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
 
  const getData = async () => {
    try {
      const response = await categoreis.get();

      if (response.status === 200   && response?.data?.categories) {
        setData(response?.data?.categories)
       
      }
    } catch (error) {
  console.log(error.message);
    }
  };

  useEffect(()=>{
    getData()
  },[])

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
            Add Category
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
      
      </Box>
    </>
  );
};

export default Index;
