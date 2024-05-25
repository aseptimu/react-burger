import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {EDIT_ICON} from "../../constants";
import {useAppDispatch, useAppSelector} from "../../../services";
import {updateUser} from "../../../services/user-slice";

const Profile = () => {
    const user = useAppSelector(store => store.user);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");

    const [isEdited, setIsEdited] = useState(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const isEditedFields = user.name !== name || user.email !== email || password !== '';
        setIsEdited(isEditedFields);
    }, [name, email, password, user.name, user.email]);

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    const setDefaultState = () => {
        setName(user.name);
        setEmail(user.email);
        setPassword('');
    };

    const handleChangeUserData = () => {
        dispatch(updateUser({email, password, name}));
    }

    return (
        <>
            <Input
                value={name}
                type="text"
                onChange={onNameChange}
                placeholder="Имя"
                icon={EDIT_ICON}
            />
            <Input
                value={email}
                type="email"
                onChange={onEmailChange}
                placeholder="Логин"
                icon={EDIT_ICON}
            />
            <Input
                value={password}
                type="password"
                onChange={onPasswordChange}
                placeholder="Пароль"
                icon={EDIT_ICON}
            />
            {
                isEdited && <div>
                    <Button htmlType="button" type="secondary" size="medium" onClick={setDefaultState}>
                        Отмена
                    </Button>
                    <Button htmlType="button" type="primary" size="medium" onClick={handleChangeUserData}>
                        Сохранить
                    </Button>
                </div>
            }
        </>
    );
};

export default Profile;