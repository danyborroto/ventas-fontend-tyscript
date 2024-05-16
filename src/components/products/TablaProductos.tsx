import { Producto } from '@/utils/types'
import Table from '@/components/my-components/table/Table'
import TableColumn from '../my-components/table/TableColumn';
import TableRow from '@/components/my-components/table/TableRow'

interface TablaProductosProps {
    data: Producto[];
}

const TablaProductos: React.FC<TablaProductosProps> = ({ data }) => {
    return (
        <Table>
            <TableColumn
                content={['ID', 'Nombre', 'Precio', 'Cantidad']}>
            </TableColumn>
            <TableRow data={data} />
        </Table >
    )
}

export default TablaProductos;