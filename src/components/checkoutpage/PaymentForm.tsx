import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, Grid, TextField, styled, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, IconButton } from "@mui/material";
import { z } from "zod";
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { isFuture, isSameYear, isValid, parse } from "date-fns";
import valid from 'card-validator'
import { useTranslation } from "react-i18next";
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';


const InfoBox = styled(Box)({
    display: "flex",
    justifyContent: "flex-end",
});

const buttonStyletwo = {
    mr: 1,
}
const IconButtonStyle = {
    position: 'absolute',
    right: 8,
    top: 8,
    color: (theme) => theme.palette.grey[500],
}
const formSchema = z.object({
    cardNumber: z.string().refine(value => valid.number(value).isValid),
    expMM: z.string().refine(value => {
        const currentDate = new Date();
        const inputDate = parse(value, 'MM', currentDate);
        return isValid(inputDate) && isFuture(inputDate);
    }, {
        message: "Expiration month must be a valid future month (MM format)",
    }),
    expYY: z.string().refine(value => {
        const currentDate = new Date();
        const inputDate = parse(value, 'yy', currentDate);
        return isValid(inputDate) && (isFuture(inputDate) || isSameYear(inputDate, currentDate));
    }, {
        message: "Expiration year must be a valid future year (YY format)",
    }),
    cvv: z.string().refine(value => /^[0-9]{3,4}$/.test(value), {
        message: "CVV must be a 3 or 4-digit number",
    }),
    specialOffers: z.boolean().optional(),
    agreeToTerms: z.boolean().refine(value => value === true, {
        message: "You must agree to terms.",
        path: ["agreeToTerms"]
    }),
});

export type PaymentFormFields = z.infer<typeof formSchema>;

interface PaymentFormProps {
    handleEditBillingInfo: () => void;
    handlePurchase: () => void;
}

export default function PaymentForm({ handleEditBillingInfo, handlePurchase }: PaymentFormProps) {

    const { t, i18n } = useTranslation();

    const { control, handleSubmit } = useForm<PaymentFormFields>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: zodResolver(formSchema),
        defaultValues: {
            cardNumber: '',
            expMM: '',
            expYY: '',
            cvv: '',
        },
    });

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <form noValidate onSubmit={handlePurchase}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Controller
                        name="cardNumber"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name={i18n.t("confirmation.cardNumber")}
                                    label={i18n.t("confirmation.cardNumber")}
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
                        name="cvv"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="CVV"
                                    label="CVV"
                                    type="password"
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
                        name="specialOffers"
                        control={control}
                        render={({
                            field: { value, onChange, onBlur, ref },
                            fieldState: { error },
                        }) => (
                            <FormControl fullWidth>
                                <FormControlLabel
                                    control={<Checkbox inputRef={ref} onChange={onChange} onBlur={onBlur} value={value} />}
                                    label={i18n.t("confirmation.specialOffers")}
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
                    <br />
                    <Controller
                        name="agreeToTerms"
                        control={control}
                        render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
                            <FormControl required fullWidth>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            inputRef={ref}
                                            onChange={(e) => {
                                                onChange(e.target.checked);
                                                if (e.target.checked) {
                                                    handleClickOpen();
                                                }
                                            }}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    }
                                    label={i18n.t("confirmation.agreeToTerms")}
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
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        maxWidth="md"
                        fullWidth={true}
                        PaperProps={{
                            style: {
                                height: '80vh',
                                overflow: 'auto',
                            },
                        }}
                    >
                        <DialogTitle>
                            {i18n.t("Terms and Conditions")}
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={IconButtonStyle}
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {i18n.t("Terms and Conditions to be Mentioned Here...")}
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>

                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Controller
                                name="expMM"
                                control={control}
                                render={({
                                    field: { value, onChange, onBlur, ref },
                                    fieldState: { error },
                                }) => (
                                    <FormControl fullWidth>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="Exp MM"
                                            label="Exp MM"
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
                                name="expYY"
                                control={control}
                                render={({
                                    field: { value, onChange, onBlur, ref },
                                    fieldState: { error },
                                }) => (
                                    <FormControl fullWidth>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            name="Exp YY"
                                            label="Exp YY"
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
                    </Grid>
                </Grid>
            </Grid>
            <InfoBox>
                <Button
                    type="button"
                    variant="text"
                    color="primary"
                    onClick={handleEditBillingInfo}
                    sx={buttonStyletwo}
                >
                    {i18n.t("generic.nextBillingInfo")}
                </Button>
                <Button onClick={handlePurchase} type="submit" variant="contained" color="primary">
                    {i18n.t("generic.purchase")}
                </Button>
            </InfoBox>
        </form>
    )
}