import { TextFieldCustom } from '../../components/Formik/FieldCustom'

type Props = {}

export default function Step2({ }: Props) {
    return (
        <>            <TextFieldCustom
            type="text"
            name="field2"
            labels={`labels`}
            placeholder={`placeholder`}
            size="small" 
            fullWidth
            // multiline
            rows={1}
        /></>
    )
}