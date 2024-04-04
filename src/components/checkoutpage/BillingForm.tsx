import { Box, Button, FormControl, FormHelperText, Grid, MenuItem, TextField } from "@mui/material";
import { City, Country, ICity, ICountry, IState, State } from "country-state-city";
import { useState } from "react";
import styled from "styled-components";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZipCodeApiResponse } from "../../types";
import axios from "axios";


const InfoBox = styled(Box)({
    display: "flex",
    justifyContent: "flex-end",
});

const buttonStyle = {
    mb: 2,
    mr: 2,
};

const mobilePhoneNumberSchema = z.string().refine(value => /^\d{10}$/.test(value), {
    message: "Phone number must be exactly 10 digits",
});

const formSchema = z.object({
    firstName: z.string().regex(/^[A-Za-z]+$/, {
        message: "First name must only contain letters",
    }),
    lastName: z.string().regex(/^[A-Za-z]+$/, {
        message: "Last name must only contain letters",
    }),
    phone: mobilePhoneNumberSchema,
    email: z
        .string()
        .min(1, "Please specify an email")
        .email('Please specify a valid email'),
    mailingAddress1: z.string(),
    mailingAddress2: z.string(),
    zipCode: z.string().regex(/^\d{5,6}$/, {
        message: "Zip code must contain only digits and be of length 5 or 6",
    }),
    country: z.string(),
    city: z.string(),
    state: z.string()
});

export type BillingFormFields = z.infer<typeof formSchema>;

interface BillingFormProps {
    onSubmitBillingInfo: (data: BillingFormFields) => void;
    handleEditTravellerInfo: () => void;
}

export default function BillingForm({ onSubmitBillingInfo, handleEditTravellerInfo }: BillingFormProps) {
    const { control, handleSubmit } = useForm<BillingFormFields>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            mailingAddress1: '',
            mailingAddress2: '',
            city: '',
            country: '',
            state: '',
            zipCode: ''
        },
    });

    const [countries] = useState<ICountry[]>(Country.getAllCountries());
    const [states, setStates] = useState<IState[]>([]);
    const [cities, setCities] = useState<ICity[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<ICountry>();
    const [selectedState, setSelectedState] = useState<IState>();
    const [zipCodeError, setZipCodeError] = useState<string | null>(null);

    const handleCountryChange = (country: ICountry) => {
        setSelectedCountry(country);
        const localstates: IState[] = State.getStatesOfCountry(country.isoCode);
        setStates(localstates);
    };

    const handleStateChange = async (state: IState) => {
        setSelectedState(state);
        const cities: ICity[] = City.getCitiesOfState(selectedCountry?.isoCode, state.isoCode);
        setCities(cities);
    };

    const validateZipCode = async (data: BillingFormFields) => {
        // const res = await axios.get(`${process.env.ZIP_CODE_API_URL}?apikey=${process.env.ZIP_CODE_API_KEY}&codes=${data.zipCode}&country=${selectedCountry?.isoCode}`);

        // if (res.data.results.length === 0) {
        //     setZipCodeError("Invalid Zip Code");
        //     return;
        // }
        // else if (res.data.results[data.zipCode][0].state_code !== selectedState?.isoCode) {
        //     setZipCodeError("Invalid Zip Code");
        //     return;
        // }

        onSubmitBillingInfo(data);
    }

    return (
        <form noValidate onSubmit={handleSubmit(validateZipCode)}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="First Name"
                                    label="First Name"
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
                        name="mailingAddress1"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="Mailing Address 1"
                                    label="Mailing Address 1"
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
                        name="country"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    label="Country"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    onChange={(e) => handleCountryChange(e.target.value)}
                                >
                                    {countries.map((country) => (
                                        <MenuItem key={country.name} value={country}>
                                            {country.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
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

                    {/* <TextField
                        select
                        label="Country"
                        {...register('country')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => handleCountryChange(e.target.value)}
                    >
                        {countries.map((country) => (
                            <MenuItem key={country.name} value={country}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </TextField> */}

                    <Controller
                        name="city"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    select
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    disabled={cities.length === 0}
                                    margin="normal"
                                    onChange={onChange}
                                >
                                    {cities.map((city) => (
                                        <MenuItem key={city.name} value={city.name}>
                                            {city.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
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

                    {/* <TextField
                        select
                        label="City"
                        {...register('city')}
                        variant="outlined"
                        fullWidth
                        disabled={cities.length === 0}
                        margin="normal"
                    >
                        {cities.map((city) => (
                            <MenuItem key={city.name} value={city}>
                                {city.name}
                            </MenuItem>
                        ))}
                    </TextField> */}

                    <Controller
                        name="phone"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="Phone"
                                    label="Phone"
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
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="Email"
                                    label="Email"
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
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="Last Name"
                                    label="Last Name"
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

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({
                                    field: { value, onChange, onBlur, ref },
                                    fieldState: { error },
                                }) => (
                                    <FormControl fullWidth>
                                        <TextField
                                            select
                                            label="State"
                                            variant="outlined"
                                            fullWidth
                                            disabled={states.length === 0}
                                            margin="normal"
                                            onChange={(e) => handleStateChange(e.target.value)}
                                        >
                                            {states.map((state) => (
                                                <MenuItem key={state.name} value={state}>
                                                    {state.name}
                                                </MenuItem>
                                            ))}
                                        </TextField>
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
                            {/* <TextField
                                select
                                label="State"
                                {...register('state')}
                                variant="outlined"
                                fullWidth
                                disabled={states.length === 0}
                                margin="normal"
                                onChange={(e) => handleStateChange(e.target.value)}
                            >
                                {states.map((state) => (
                                    <MenuItem key={state.name} value={state}>
                                        {state.name}
                                    </MenuItem>
                                ))}
                            </TextField> */}


                        </Grid>
                        <Grid item xs={6}>
                            <Controller
                                name="zipCode"
                                control={control}
                                render={({
                                    field: { value, onChange, onBlur, ref },
                                    fieldState: { error },
                                }) => (
                                    <FormControl fullWidth>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="Zip Code"
                                            label="Zip Code"
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
                                            {zipCodeError ?? ''}
                                        </FormHelperText>
                                    </FormControl>
                                )}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <InfoBox>
                <Button
                    type="button"
                    variant="text"
                    color="primary"
                    onClick={handleEditTravellerInfo}
                    sx={buttonStyle}
                >
                    Edit Traveller Info
                </Button>
                <Button type="submit" variant="contained" color="primary" sx={buttonStyle}>
                    NEXT:PAYMENT INFO
                </Button>
            </InfoBox>
        </form>
    )
}