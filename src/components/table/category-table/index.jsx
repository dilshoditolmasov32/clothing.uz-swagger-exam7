import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import categoreis from "../../../api/categoreis";
import Modal from "../../modal/category-modal";

export default function BasicTable({ data }) {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});

  const deleteItem = async (id) => {
    try {
      const response = await categoreis.delete(id);
      if (response.status === 200 || response.status === 201) {
        toast.info("Ma'lumot muvaqqiyati o'chirildi.");
        setOpen(false)
        setTimeout(() => {
          window.location.reload();
        }, 1000);

      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const openModal = (item) => {
    setUpdateData(item);
   setOpen(true); 
  };

  return (
    <>
      <Modal updateData={updateData} open={open} setOpen={setOpen} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{ background: "rgb(99, 91, 255)", color: "white" }}
          >
            <TableRow>
              <TableCell sx={{ fontSize: "18px" }}>T/r</TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                Xizmat nomi
              </TableCell>
              <TableCell
                align="right"
                sx={{ paddingRight: "60px", fontSize: "18px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((item, index) => (
              <TableRow
                key={item.category_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: "16px" }}>
                  {index + 1}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "16px" }}>
                  {item.category_name}
                </TableCell>
                <TableCell align="right" sx={{ display: "flex", gap: 2 }}>
                  <Button
                    onClick={() => openModal(item)}
                    sx={{
                      bgcolor: "#6870fa",
                      color: "white",
                      paddingY: "10px",
                      "&:hover": {
                        bgcolor: "rgb(0, 51, 102)",

                      },
                      fontSize:"16px"
                    }}
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    onClick={() => deleteItem(item.category_id)}
                    sx={{
                      bgcolor: "red",
                      color: "white",
                      paddingY: "10px",
                      "&:hover": {
                        bgcolor: "darkred",
                      },
                      fontSize:"17px"
                    }}
                  >
                    <RiDeleteBin6Line />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
