import { Producto } from '@/utils/types'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import './style.css'

interface TablaProductosProps {
    data: Producto[];
}

const TablaProductos: React.FC<TablaProductosProps> = ({ data }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead >
                    <TableRow>
                        <TableCell >
                            ID
                        </TableCell>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Price
                        </TableCell>
                        <TableCell>
                            Amount
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item: Producto) => {
                        return (
                            <TableRow key={item.id}>
                                <TableCell align='right'>
                                    {item.id}
                                </TableCell>
                                <TableCell>
                                    {item.name}
                                </TableCell>
                                <TableCell align='right'>
                                    {`$${item.price}`}
                                </TableCell>
                                <TableCell align='right'>
                                    {item.amount}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TablaProductos;