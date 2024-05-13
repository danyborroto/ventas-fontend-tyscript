'use client'
import TablaProductos from "@/components/products/TablaProductos";
import { data } from '../../utils/data'
import React, { useEffect, useState } from 'react'
import { Producto } from "@/utils/types";
import Button from '@mui/material/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Paper } from "@mui/material";

export default function ProductPage() {
    const [datos, setDatos] = useState<Producto[]>([]);

    useEffect(() => {
        setDatos(data);
    }, [])

    return (
        <>
            <title>Productos</title>
            <h1>Products page</h1>
            <Button
                variant="contained"
                color="success"
                startIcon={<AddCircleIcon />}
            >Add New</Button>
            <div>
                <TablaProductos data={datos} />
            </div>

        </>
    )
}