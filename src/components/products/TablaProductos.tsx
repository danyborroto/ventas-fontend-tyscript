import { Producto } from '@/utils/types'
import './style.css'

interface TablaProductosProps {
    data: Producto[];
}

const TablaProductos: React.FC<TablaProductosProps> = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(producto => {
                        return (
                            <tr key={producto.id}>
                                <td>
                                    {producto.id}
                                </td>
                                <td>
                                    {producto.name}
                                </td>
                                <td>
                                    {`$ ${producto.price}`}
                                </td>
                                <td>
                                    {producto.amount}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TablaProductos;