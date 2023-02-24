import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import "./ProductListComponent.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function ProductListComponent() {
    const products = useLoaderData()
    return (
        <div>
            <Link to={"/producto"}>Nuevo</Link>
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">Cantidad</TableCell>
                            <TableCell align="right">Precio</TableCell>
                            <TableCell align="right">Opciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{product._name}</TableCell>
                                <TableCell align="right">{product._amount}</TableCell>
                                <TableCell align="right">{product._price}</TableCell>
                                <TableCell align="right">
                                    
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
