import {ChangeEvent, useState} from "react";

type TFormTypes = {
    email?: string;
    password?: string;
    name?: string;
    code?: string;
}

export function useForm(inputValues: TFormTypes={}) {
    const [values, setValues] = useState(inputValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValues({...values, [name]: value});
    };
    return {values, handleChange, setValues};
}