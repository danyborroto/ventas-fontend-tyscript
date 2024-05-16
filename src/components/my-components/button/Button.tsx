'use client'
import './button.style.css'

interface ButtonProps {
    children: string | any;
    type: string;
    onCLick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, onCLick }) => {
    return (
        <button className={`button middle ${type}`} onClick={onCLick}>
            {children}
        </button >
    )
}

export default Button;