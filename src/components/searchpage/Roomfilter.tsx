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
import {default as styledComponent}  from 'styled-components';
import { useDispatch } from 'react-redux';
import { setBedTypes, setRoomTypes } from '../../redux/reducers/filterSortReducer';
import { generateRoomTypeNumbers } from '../../utils/util';

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

const AccordionDiv = styledComponent.div`
  padding: 10px;
  border-radius: 4px;
  background-color: #EFF0F1;
  margin-top: 20px;
  margin-left: 20px;
`

export default function CustomizedAccordions() {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState<string | false>('BedTypes');
  const [checkedState, setCheckedState] = React.useState<{
    [key: string]: {
      [option: string]: boolean;
    };
  }>({
    BedTypes: { Single: false, Double: false },
    RoomTypes: { GrandDeluxe: false, SuperDeluxe: false, FamilyDeluxe: false, CoupleSuite: false, GardenSuite: false, StandardSuite: false },
  });

  const [activeBedTypes, setActiveBedTypes] = React.useState<string[]>([]);
  const [activeRoomTypes, setActiveRoomTypes] = React.useState<string[]>([]);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleCheckboxChange = (panel: string, option: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState(prevState => ({
      ...prevState,
      [panel]: { ...prevState[panel], [option]: event.target.checked },
    }));

    if (panel === 'BedTypes') {
      if (event.target.checked) {
        setActiveBedTypes(prev => [...prev, option]);
        dispatch(setBedTypes([...activeBedTypes, option]));
      } else {
        setActiveBedTypes(prev => prev.filter(type => type !== option));
        dispatch(setBedTypes([...activeBedTypes.filter(type => type !== option)]));
      }
    } else if (panel === 'RoomTypes') {
      if (event.target.checked) {
        setActiveRoomTypes(prev => [...prev, option]);
        const roomTypes = generateRoomTypeNumbers([...activeRoomTypes, option])
        dispatch(setRoomTypes(roomTypes));
      } else {
        setActiveRoomTypes(prev => prev.filter(type => type !== option));
        const roomTypes = generateRoomTypeNumbers([...activeRoomTypes.filter(type => type !== option)]);
        dispatch(setRoomTypes(roomTypes));
      }
    }
  };

  return (
    <AccordionDiv>
      <Typography variant="h6" gutterBottom sx={{ marginLeft: '23px' }}>
        Narrow your results
      </Typography>
      <Accordion expanded={expanded === 'BedTypes'} onChange={handleChange('BedTypes')}>
        <AccordionSummary aria-controls="BedTypes-content" id="BedTypes-header">
          <Typography>Bed type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox checked={checkedState.BedTypes.Single} onChange={handleCheckboxChange('BedTypes', 'Single')} />}
            label="Single"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.BedTypes.Double} onChange={handleCheckboxChange('BedTypes', 'Double')} />}
            label="Double"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'RoomTypes'} onChange={handleChange('RoomTypes')}>
        <AccordionSummary aria-controls="RoomTypes-content" id="RoomTypes-header">
          <Typography>Room type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControlLabel
            control={<Checkbox checked={checkedState.RoomTypes.GrandDeluxe} onChange={handleCheckboxChange('RoomTypes', 'GrandDeluxe')} />}
            label="Grand Deluxe"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.RoomTypes.SuperDeluxe} onChange={handleCheckboxChange('RoomTypes', 'SuperDeluxe')} />}
            label="Super Deluxe"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.RoomTypes.FamilyDeluxe} onChange={handleCheckboxChange('RoomTypes', 'FamilyDeluxe')} />}
            label="Family Deluxe"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.RoomTypes.CoupleSuite} onChange={handleCheckboxChange('RoomTypes', 'CoupleSuite')} />}
            label="Couple Suite"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.RoomTypes.GardenSuite} onChange={handleCheckboxChange('RoomTypes', 'GardenSuite')} />}
            label="Garden Suite"
          />
          <FormControlLabel
            control={<Checkbox checked={checkedState.RoomTypes.StandardSuite} onChange={handleCheckboxChange('RoomTypes', 'StandardSuite')} />}
            label="Standard Suite"
          />
        </AccordionDetails>
      </Accordion>
    </AccordionDiv>
  );
}




















