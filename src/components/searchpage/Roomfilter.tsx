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
 borderLeft: 'none',
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
 backgroundColor: '#EFF0F1',
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
 backgroundColor: '#EFF0F1'
}));

export default function CustomizedAccordions() {
  type CheckedState = {
    [key: string]: {
       [option: string]: boolean;
    };
   };
 const [expanded, setExpanded] = React.useState<string | false>('panel1');
 const [checkedState, setCheckedState] = React.useState<CheckedState>({
    panel1: { option1: false, option2: false },
    panel2: { option1: false,option2:false,option3:false,option4:false,option5:false,option6:false },
    panel3: { option1: false },
 });

 const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

 const handleCheckboxChange = (panel: string, option: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(prevState => ({
      ...prevState,
      [panel]: { ...prevState[panel], [option]: event.target.checked },
    }));
 };

 return (
    <div style={{ padding: '10px', borderRadius: 4, backgroundColor: '#EFF0F1', marginTop: '20px', marginLeft: '20px' }}>
      <Typography variant="h6" gutterBottom sx={{ marginLeft: '23px' }}>
        Narrow your results
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Bed type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel1.option1} onChange={handleCheckboxChange('panel1', 'option1')} />}
            label="Single"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel1.option2} onChange={handleCheckboxChange('panel1', 'option2')} />}
            label="Double"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Room type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel2.option1} onChange={handleCheckboxChange('panel2', 'option1')} />}
            label="Grand Deluxe"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel2.option2} onChange={handleCheckboxChange('panel2', 'option2')} />}
            label="Super Deluxe"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel2.option3} onChange={handleCheckboxChange('panel2', 'option3')} />}
            label="Family Deluxe"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel2.option4} onChange={handleCheckboxChange('panel2', 'option4')} />}
            label="Couple Suite"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel2.option5} onChange={handleCheckboxChange('panel2', 'option5')} />}
            label="Garden Suite"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.panel2.option6} onChange={handleCheckboxChange('panel2', 'option6')} />}
            label="Standard Suite"
          />
          
        </AccordionDetails>
      </Accordion>
      
    </div>
 );
}

















