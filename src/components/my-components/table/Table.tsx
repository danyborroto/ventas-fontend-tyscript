import './table.style.css'

const Table = ({ children }: { children: React.ReactNode }) => {
    return (
        <table className='table-simple'>
            {children}
        </table>
    )
}

export default Table;