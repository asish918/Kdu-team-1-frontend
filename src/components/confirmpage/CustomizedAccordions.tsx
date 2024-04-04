import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
 AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { Typography } from '@mui/material';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
   ))(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.divider}`,
    
    '&:not(:last-child)': {
       borderBottom: 0,
    },
    '&::before': {
       display: 'none',
    },
   }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
 <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
 />
))(({ theme }) => ({
 backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgb(255, 255, 255)'
      : 'rgb(255, 255, 255)',
 flexDirection: 'row-reverse',
 '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
 },
 '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
 },
}));

const DetailsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    
   });
   
   const DetailRow = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px', 
   });

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
 padding: theme.spacing(2),
 borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const TypographyStyle = {
    marginLeft: '21px',
    color: '#5D5D5D', 
  };

const CustomizedAccordions: React.FC = () => {
 const [expanded, setExpanded] = React.useState<string[]>([]);

 const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
  setExpanded(isExpanded ? [...expanded, panel] : expanded.filter(id => id !== panel));
};

 return (
    <div style={{width: "100%"}}>
      <Accordion expanded={expanded.includes('panel1')} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Room Total Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
      <DetailsContainer>
        <DetailRow>
          <Typography sx={TypographyStyle}>Nightly Rate</Typography>
          <Typography>$XXX.xx</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>SubTotal</Typography>
          <Typography>$XXX.xx</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>Taxes, Surcharges, Fees</Typography>
          <Typography>$XXX.xx</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>VAT</Typography>
          <Typography>$XXX.xx</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>Total</Typography>
          <Typography>$XXX.xx</Typography>
        </DetailRow>
      </DetailsContainer>
    </AccordionDetails>

      </Accordion>
      <Accordion expanded={expanded.includes('panel2')} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Guest Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
      <DetailsContainer>
        <DetailRow>
          <Typography sx={TypographyStyle}>First Name</Typography>
          <Typography>Neer </Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>Last Name</Typography>
          <Typography>Patel</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>Email</Typography>
          <Typography>neer25@gmail.com</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>Phone</Typography>
          <Typography>6358124606</Typography>
        </DetailRow>
      </DetailsContainer>
    </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded.includes('panel3')} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Billing Address</Typography>
        </AccordionSummary>
        <AccordionDetails>
      <DetailsContainer>
        <DetailRow>
          <Typography sx={TypographyStyle}>Country</Typography>
          <Typography>India </Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>State</Typography>
          <Typography>karnataka</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>City</Typography>
          <Typography>Bangalore</Typography>
        </DetailRow>
        <DetailRow>
          <Typography sx={TypographyStyle}>Zip Code</Typography>
          <Typography>560019</Typography>
        </DetailRow>
      </DetailsContainer>
    </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded.includes('panel4')} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Payment Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <DetailsContainer>
        <DetailRow>
          <Typography sx={TypographyStyle}>Payment Id</Typography>
          <Typography>xe56rrrt@paytm.com</Typography>
        </DetailRow>
      </DetailsContainer>
        </AccordionDetails>
      </Accordion>
    </div>
 );
};

export default CustomizedAccordions;
