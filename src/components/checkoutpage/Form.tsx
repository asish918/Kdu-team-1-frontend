import { zodResolver } from '@hookform/resolvers/zod';
import {
    Button,
    TextField,
    FormHelperText,
    FormControl,
    Box,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const mobilePhoneNumberSchema = z
    .string()
    // Remove all non-digit characters.
    .transform((value) => value.replace(/\D/gu, ''))
    // Must be 10 digits.
    .refine((value) => value.length === 10, 'Please specify 10 digits')
    // Mobile, Cellular, and Satellite services use the code 04.
    .refine(
        (value) => value.startsWith('04'),
        "Mobile numbers must start with '04'"
    );

const looseOptional = <T extends z.ZodTypeAny>(schema: T) =>
    z.preprocess(
        (value: unknown) =>
            value === null || (typeof value === 'string' && value === '')
                ? undefined
                : value,
        schema.optional()
    );

const formSchema = z.object({
    phone: looseOptional(mobilePhoneNumberSchema),
    email: z
        .string()
        .min(1, "Please specify an email")
        .email('Please specify a valid email'),
});
type FormFields = z.infer<typeof formSchema>;

export default function App() {
    const { control, handleSubmit } = useForm<FormFields>({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            phone: '',
        },
    });

    return (
        <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
            <Box sx={{ display: 'flex', gap: '1rem', p: '1rem' }}>
                <Controller
                    name="phone"
                    control={control}
                    render={({
                        field: { value, onChange, onBlur, ref },
                        fieldState: { error },
                    }) => (
                        <FormControl>
                            <TextField
                                name="phone"
                                label="Phone"
                                placeholder="0400-000-000"
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                            />
                            <FormHelperText
                                sx={{
                                    color: 'error.main',
                                }}
                            >
                                {error?.message ?? ''}
                            </FormHelperText>
                        </FormControl>
                    )}
                />
                <Controller
                    name="email"
                    control={control}
                    render={({
                        field: { value, onChange, onBlur, ref },
                        fieldState: { error },
                    }) => (
                        <FormControl>
                            <TextField
                                name="email"
                                label="Email"
                                placeholder="example@mail.com"
                                required
                                inputRef={ref}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                error={Boolean(error)}
                            />
                            <FormHelperText
                                sx={{
                                    color: 'error.main',
                                }}
                            >
                                {error?.message ?? ''}
                            </FormHelperText>
                        </FormControl>
                    )}
                />
                <Button type="submit">Submit</Button>
            </Box>
        </form>
    );
}
