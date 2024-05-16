interface TableColumnProps {
    content: string[]
}

const TableColumn = ({ content }: TableColumnProps) => {
    return (
        <thead>
            <tr>
                {content.map((item, index) => {
                    return (<th key={index}>{item}</th>)
                })}
            </tr>
        </thead>
    )
}

export default TableColumn;