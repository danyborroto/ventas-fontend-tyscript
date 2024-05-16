'use client'
import TablaProductos from "@/components/products/TablaProductos";
import { data } from '../../utils/data'
import React, { useEffect, useState } from 'react'
import { Producto } from "@/utils/types";
import Button from "@/components/my-components/button/Button";


export default function ProductPage() {
    const [datos, setDatos] = useState<Producto[]>([]);

    useEffect(() => {
        setDatos(data);
    }, [])

    return (
        <>
            <title>Productos</title>
            <h1>Products page</h1>
            <Button type="success" onCLick={() => console.log('sdasdas')
            }>Add New</Button>
            <div>
                <TablaProductos data={datos} />
            </div>

        </>
    )
}