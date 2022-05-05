import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "material-ui-search-bar";
import FilterDeptData from "./FilterDeptData";
import filter from "../../images/filter.png";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { sortName, sortDeptManager, sortStatus } from "../../functions/sorting";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function DepartmentList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);
  const [searched] = React.useState("");
  const [duplicateData, setDuplicateData] = React.useState([]);
  const [rowData, setRowData] = React.useState(data);
  const [orderDirection, setOrderDirection] = React.useState("asc");

  //Getting user data
  React.useEffect(() => {
    fetch("http://localhost:5000/dept/")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  //Making a duplicate of my data so that this data never changed and is accessible once the search bar is empty. Rather than re rendering whole page
  React.useEffect(() => {
    fetch("http://localhost:5000/dept/")
      .then((resp) => resp.json())
      .then((data) => setDuplicateData(data));
  });

  // Avoid a layout jump when reaching the last page with empty data.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //Change the status of a user by just clicking on it
  const changeStatus = (status, id) => {
    let currentStatus = status ? false : true;
    const myStatus = {
      status: currentStatus,
    };
    axios.patch(`http://localhost:5000/dept/updateStatus/${id}`, myStatus);
    window.location = "/department";
  };

  //My search bar function
  const handleSearch = (value) => {
    if (value === "") {
      setData(duplicateData);
    } else {
      const filterRows = data.filter((row) => {
        return (
          row.name.toLowerCase().includes(value.toLowerCase()) ||
          row.manager.toLowerCase().includes(value.toLowerCase())
        );
      });
      setData(filterRows);
    }
  };

  //Filter data
  const filterData = () => {
    let choosenStatus = localStorage.getItem("status");

    //Setting up my status conditions
    let statusCondition;
    if (choosenStatus === "undefined") {
      statusCondition = undefined;
    } else if (choosenStatus === "Active") {
      statusCondition = true;
    } else {
      statusCondition = false;
    }
    if (statusCondition === true || statusCondition === false) {
      const filterRows = data.filter((row) => {
        return row.status === statusCondition;
      });
      setData(filterRows);
    }
    localStorage.removeItem("status");
  };

  const handleNameSortRequest = () => {
    setRowData(sortName(data, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleManagerSortRequest = () => {
    setRowData(sortDeptManager(data, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleStatusSortRequest = () => {
    setRowData(sortStatus(data, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };
  return (
    <div className="table_employeeList">
    <h2>Departments </h2>
      <Paper>
        <div className="filter_wrapper">
          <FilterDeptData />
          <button onClick={filterData} className="filter_button">
            <img
              src={filter}
              alt="filter sign"
              width="13px"
              height="10px"
              float="left"
            />
            Filter
          </button>
        </div>
        <SearchBar
          style={{ width: 300, float: "right" }}
          value={searched}
          onChange={(searchedVal) => handleSearch(searchedVal)}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Actions</TableCell>
                <TableCell align="left" onClick={handleNameSortRequest}>
                  <TableSortLabel active={true} direction={orderDirection}>
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell align="left" onClick={handleManagerSortRequest}>
                  <TableSortLabel active={true} direction={orderDirection}>
                    Manager
                  </TableSortLabel>
                </TableCell>
                <TableCell align="left" onClick={handleStatusSortRequest}>
                  <TableSortLabel active={true} direction={orderDirection}>
                    Status
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? data.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : data
              ).map((row) => (
                <TableRow key={row._id}>
                  <TableCell style={{ width: 160 }}>
                    <Link to={"/editDept/" + row._id}>
                      <button>Edit</button>
                    </Link>
                    {
                      <button onClick={() => changeStatus(row.status, row._id)}>
                        {row.status ? "Deactitate" : "Activate"}
                      </button>
                    }
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.manager}</TableCell>
                  <TableCell>{row.status ? "Active" : "Deactive"}</TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
