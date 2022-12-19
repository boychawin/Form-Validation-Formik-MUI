import React from 'react'
import { TextFieldCustom } from '../../components/Formik/FieldCustom'

type Props = {}

export default function Step1({ }: Props) {
    return (
        <>
            <TextFieldCustom
                type="text"
                name="field1"
                labels={`labels`}
                placeholder={`placeholder`}
                size="small" 
                fullWidth
                // multiline
                rows={1}
            />

        </>
    )
}