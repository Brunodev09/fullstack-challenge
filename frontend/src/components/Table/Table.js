import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const arrayToMap = (array) => {
    let _m = {};
    for (let item of array) {
        if (!_m[item.id]) _m[item.id] = item;
    }
    return _m;
}

export default function SimpleTable(props) {
    let arr = props.arr;
    let map = arrayToMap(arr);

    let rows2 = [...props.rows2];
    rows2.sort((a,b) => b.points - a.points);

    const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* {props.cols.map((k, i) => (
                            <div>
                                {i === 0 ? <TableCell>{k}</TableCell> : <TableCell align="right">{k}</TableCell>}
                            </div>
                        ))} */}
                            <TableCell>Position</TableCell>
                            <TableCell >Track</TableCell>
                            <TableCell >Artist</TableCell>
                            <TableCell >Duration(s)</TableCell>
                            <TableCell >Genre</TableCell>
                            <TableCell >Danceability</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map((row, i) => (
                            <TableRow >
                                <TableCell >{i+1}</TableCell>
                                <TableCell >{map[row].name}</TableCell>
                                <TableCell >{map[row].artist}</TableCell>
                                <TableCell >{((map[row].duration / 1000)).toFixed(0)}</TableCell>
                                <TableCell >{map[row].genre}</TableCell>
                                <TableCell >{((map[row].dance * 100).toFixed(0) + "%")}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{marginTop: "5%"}}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/* {props.cols.map((k, i) => (
                            <div>
                                {i === 0 ? <TableCell>{k}</TableCell> : <TableCell align="right">{k}</TableCell>}
                            </div>
                        ))} */}
                                <TableCell>Position</TableCell>
                                <TableCell >Nickname</TableCell>
                                <TableCell >Contribution</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows2.map((row, i) => (
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        {i+1}
                                    </TableCell>
                                    <TableCell >{row.nickname}</TableCell>
                                    <TableCell >{row.points}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}