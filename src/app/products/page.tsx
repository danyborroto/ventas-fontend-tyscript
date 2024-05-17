'use client'
import TablaProductos from "@/components/products/TablaProductos";
import { data } from '../../utils/data'
import React, { useEffect, useState } from 'react'
import { Producto } from "@/utils/types";
import Button from "@/components/my-components/button/Button";
import Modal from "@/components/my-components/modal/Modal";


export default function ProductPage() {
    const [datos, setDatos] = useState<Producto[]>([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setDatos(data);
    }, [])

    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }


    return (
        <>
            <title>Productos</title>
            <h1>Products page</h1>
            <Button type="success" onCLick={openModal}>Add New</Button >
            <div>
                <TablaProductos data={datos} />
            </div>
            <Modal
                isOpen={isModalOpen}
                onSuccess={() => console.log('Click en Aceptar')
                }
                onClose={closeModal}
            >
                <div>
                    <p>adasd</p>
                </div>
            </Modal>
        </>
    )
}