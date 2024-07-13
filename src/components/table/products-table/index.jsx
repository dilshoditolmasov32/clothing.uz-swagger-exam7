import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RiDeleteBin6Line } from "react-icons/ri";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button as MUIButton } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Modal from "../../modal/products-modal";
import product from "../../../api/product";

export default function BasicTable({ data }) {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});

  const deleteItem = async (id) => {
    try {
      const response = await product.delete(id);
      console.log("delete", response);
      if (response.status === 200 || response.status === 201) {
        toast.info("Ma'lumot muvaqqiyati o'chirildi.");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

 

  

  return (
    <>
      <Modal
        updateData={updateData}
        open={open}
        setOpen={() => setOpen(false)}
      />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "rgb(99, 91, 255)", color: "#800080" }}>
            <TableRow>
              <TableCell sx={{ fontSize: "18px" }}>T/r</TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                Name
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                Color
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                Made in
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                Size
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                Count
              </TableCell>
              <TableCell align="right" sx={{ fontSize: "18px" }}>
                Cost
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
                key={item.product_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: "16px" }}>
                  {index + 1}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "16px" }}>
                  {item.product_name}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "16px" }}>
                  {item.color}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "16px" }}>
                  {item.made_in}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "16px" }}>
                  {item.size[0]}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "16px" }}>
                  {item.count}
                </TableCell>
                <TableCell align="right" sx={{ fontSize: "16px" }}>
                  {item.cost}
                </TableCell>
                <TableCell align="right" sx={{ display: "flex", gap: 2 }}>
                  <NavLink
                   to={`product/${item.product_id}`}
                  > 
                    <MUIButton
                      onClick={() => singleProduct(item)}
                      sx={{
                        bgcolor: "#6870fa",
                        color: "white",
                        paddingY: "10px",
                        "&:hover": {
                          bgcolor: "rgb(0, 51, 102)",
                        },
                        fontSize: "18px",
                      }}
                    >
                      <VisibilityIcon />
                    </MUIButton>
                  </NavLink>
                  <MUIButton
                    onClick={() => deleteItem(item.product_id)}
                    sx={{
                      bgcolor: "#FF0000",
                      color: "white",
                      paddingY: "10px",
                      "&:hover": {
                        bgcolor: "darkred",
                      },
                      fontSize: "18px",
                    }}
                  >
                    <RiDeleteBin6Line />
                  </MUIButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
