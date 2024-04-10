import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, FormControl, FormHelperText, TextField, styled } from "@mui/material";
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { z } from "zod";
import { RootState } from "../../redux/store";
import { useTranslation } from "react-i18next";


const StyledBox = styled(Box)({
    display: 'flex',
    justifyContent: "space-between",
});

const InnerStyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    width: "45%",
});

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
});

export type TravelFormFields = z.infer<typeof formSchema>;

interface TravelFormProps {
    onSubmitTravellerInfo: (data: TravelFormFields) => void;
}

export default function TravelForm({ onSubmitTravellerInfo }: TravelFormProps) {
    const travelInfo = useSelector((state: RootState) => state.checkoutForm.traveller_info);
    const { t, i18n } = useTranslation();

    const { control, handleSubmit } = useForm<TravelFormFields>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: travelInfo.firstName,
            lastName: travelInfo.lastName,
            email: travelInfo.email,
            phone: travelInfo.phone,
        },
    });


    return (
        <form noValidate onSubmit={handleSubmit(onSubmitTravellerInfo)}>
            <StyledBox>
                <InnerStyledBox>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name={i18n.t("confirmation.firstName")}
                                    label={i18n.t("confirmation.firstName")}
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
                        name="phone"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name={i18n.t("confirmation.phone")}
                                    label={i18n.t("confirmation.phone")}
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
                                    margin="normal"
                                    fullWidth
                                    name={i18n.t("confirmation.email")}
                                    label={i18n.t("confirmation.email")}
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
                </InnerStyledBox>
                <InnerStyledBox>
                    <Controller
                        name="lastName"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name={i18n.t("confirmation.lastName")}
                                    label={i18n.t("confirmation.lastName")}
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
                </InnerStyledBox>
            </StyledBox>
            <InfoBox>
                <Button type="submit" variant="contained" color="primary" sx={buttonStyle}>
                    {i18n.t("generic.nextBillingInfo")}
                </Button>
            </InfoBox>
        </form>
    )
}
