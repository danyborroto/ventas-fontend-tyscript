import { Producto } from "@/utils/types"

interface TablaRowProps {
    data: Record<string, any>[];
}

const TablaRow: React.FC<TablaRowProps> = ({ data }) => {
    return (
        <tbody>
            {
                data.map((item, index) => {
                    return (
                        <tr key={index}>
                            {
                                Object.entries(item).map(([key, value]) => (
                                    <td key={key}
                                        className={typeof (value) === 'string' ? 'align-left' : 'align-rigth'}
                                    >{value}</td>
                                ))
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TablaRow;