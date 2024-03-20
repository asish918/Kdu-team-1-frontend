import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
 AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const Accordion = styled((props: AccordionProps) => (
 <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
 border: `1px solid ${theme.palette.divider}`,
 borderTop: 'none', 
 borderRight: 'none',
 borderLeft:'none', 
 '&:not(:last-child)': {
    
    borderBottom: `1px solid ${theme.palette.divider}`,
 },
 '&::before': {
    display: 'none',
 },
}));


const AccordionSummary = styled((props: AccordionSummaryProps) => (
 <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
 />
))(({ theme }) => ({
 backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
 flexDirection: 'row', 
 '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
 },
 '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
 },
}));


const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
 padding: theme.spacing(2),
 borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
 const [expanded, setExpanded] = React.useState<string | false>('panel1');
 const [checkedState, setCheckedState] = React.useState({
    panel1: false,
    panel2: false,
    panel3: false,
 });

 const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

 const handleCheckboxChange = (panel: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(prevState => ({ ...prevState, [panel]: event.target.checked }));
 };

 return (
  <div style={{ padding: '10px', border: '1px solid #ccc', backgroundColor: '#f7f7f7', marginTop: '20px', marginLeft: '20px' }}> {/* Added marginTop and marginLeft */}
  <Typography variant="h6" gutterBottom sx={{ marginLeft: '23px' }}>
   Narrow your results
  </Typography>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Typography>Filter name</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FormControlLabel
        control={<Checkbox checked={checkedState.panel1} onChange={handleCheckboxChange('panel1')} />}
        label="option-1"
      />
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
      <Typography>Filter name</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FormControlLabel
        control={<Checkbox checked={checkedState.panel2} onChange={handleCheckboxChange('panel2')} />}
        label="option-1"
      />
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
      <Typography>Filter name</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <FormControlLabel
        control={<Checkbox checked={checkedState.panel3} onChange={handleCheckboxChange('panel3')} />}
        label="option-1"
      />
    </AccordionDetails>
  </Accordion>
</div>
 );
}
















