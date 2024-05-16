'use client'
import TablaProductos from "@/components/products/TablaProductos";
import { data } from '../../utils/data'
import React, { useEffect, useState } from 'react'
import { Producto } from "@/utils/types";


export default function ProductPage() {
    const [datos, setDatos] = useState<Producto[]>([]);

    useEffect(() => {
        setDatos(data);
    }, [])

    return (
        <>
            <title>Productos</title>
            <h1>Products page</h1>

            <div>
                <TablaProductos data={datos} />
            </div>

        </>
    )
}