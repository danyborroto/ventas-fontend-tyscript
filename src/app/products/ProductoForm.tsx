import TextField from '@/components/my-components/textfield/TextField';
import React from 'react';

const ProductoForm = () => {
    let options = {
        1: 'Value1',
        2: 'Value2',
        3: 'Value3',
        4: 'Value4'
    }
    return (
        <form className='flex'>
            <TextField
                label={'Name:'}
                type={'select'}
                id={'name'}
                isRequire={false}
                isDisabled={false}
                options={options}
            />
            <TextField
                label={'Price:'}
                type={'number'}
                id={'price'}
                isRequire={true}
                isDisabled={false}
            />
            <TextField
                label={'Amount:'}
                type={'number'}
                id={'amount'}
                isRequire={true}
                isDisabled={false}
            />
        </form>
    )
}

export default ProductoForm;