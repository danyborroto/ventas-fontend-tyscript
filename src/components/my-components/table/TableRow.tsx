import { Producto } from "@/utils/types"
import Button from "../button/Button";

interface TablaRowProps {
    data: Record<string, any>[];
}

const TablaRow: React.FC<TablaRowProps> = ({ data }) => {
    const cellStyle: React.CSSProperties = {
        maxWidth: '100px'
    };
    return (
        <tbody>
            {
                data.map((item, index) => {
                    let idItem = 0;
                    console.log(item['id']);

                    return (
                        <tr key={index}>
                            {
                                Object.entries(item).map(([key, value]) => (
                                    <td key={key}
                                        className={typeof (value) === 'string' ? 'align-left' : 'align-rigth'}
                                    >{value}</td>
                                ))
                            }
                            <td style={cellStyle}>
                                <Button type="success" onCLick={() => console.log(item['id'])
                                }>E</Button >
                                <Button type="success" onCLick={() => console.log(item['id'])}>R</Button >
                            </td>
                        </tr>
                    )
                })
            }
        </tbody >
    )
}

export default TablaRow;