'use client'
import {Button, Checkbox, Group, PasswordInput, TextInput, Title} from '@mantine/core';
import { useForm } from '@mantine/form';
import './style.scss';
import {DateInput} from "@mantine/dates";
import '@mantine/dates/styles.css';

export default function Register() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            birthday: null
        },

        validate: {
            firstName: (value) => (/^\S{3,}$/.test(value) ? null : 'Invalid firstName'),
            lastName: (value) => (/^\S{3,}$/.test(value) ? null : 'Invalid lastName'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (/^\S{4,}$/.test(value) ? null : 'Invalid password'),
            birthday: (value) => (value != null ? null : 'Invalid birthday')
        },
    });

    return (
        <main className="Container">
            <Title className="Title">Crypto</Title>
            <form className="Reg--Form" onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    mt="md"
                    withAsterisk
                    label="FirstName"
                    placeholder="Vlad"
                    key={form.key('firstName')}
                    {...form.getInputProps('firstName')}
                />
                <TextInput
                    mt='md'
                    withAsterisk
                    label="LastName"
                    placeholder="Isakov"
                    key={form.key('lastName')}
                    {...form.getInputProps('lastName')}
                />
                <TextInput
                    mt='md'
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    mt='md'
                    withAsterisk
                    label="Password"
                    placeholder="********"
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                />
                <DateInput
                    mt='md'
                    withAsterisk
                    label="Birthday"
                    placeholder="June 19, 2024"
                    key={form.key('birthday')}
                    {...form.getInputProps('birthday')}
                />
                <Button type="submit" mt='lg' w='100%'>Submit</Button>
            </form>
        </main>
    );
}