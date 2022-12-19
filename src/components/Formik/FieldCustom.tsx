
import { Field } from 'formik';
import { TextFieldWithErrorMessage } from '../TextFieldCustom';

export const TextFieldCustom = (props: any) => {
  return (
    <div>
      <div className="relative w-full mb-3 ">
        <label
          className="block mb-2 "
          htmlFor={`${props?.labels}`}
        >
          <span className="text-xs font-bold uppercase "> {props?.labels}</span>
          <span className="text-xs text-red-600"> {props?.labelimportant ? props?.labelimportant : ''}</span>
        </label>


        <Field
          {...props}
          // component={TextField}
          component={TextFieldWithErrorMessage}
        />
      </div>
    </div>
  );
};
