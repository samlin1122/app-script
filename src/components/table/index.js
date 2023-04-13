// components
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TableBasic({ id, list, label }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            {label.map((label, index) => (
              <StyledTableCell
                key={"TableHead" + id + label.id + index}
                align={index ? "right" : "left"}
              >
                {label.title}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row, index) => (
            <StyledTableRow key={id + index}>
              {label.map((label, index) => (
                <StyledTableCell
                  key={"TableCell" + id + label.id + index}
                  align={index ? "right" : "left"}
                >
                  {row[label.id]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableBasic;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
