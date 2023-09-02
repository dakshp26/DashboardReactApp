//Uses MUI Accordian for the FAQ page dropdowns

import {Box, useTheme } from '@mui/material';
import Header from"../../components/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from"../../theme";
import { Typography } from '@mui/material';

//we create this component and reuse it for multiple times (the description can also be turned into a variable but has been kept same for now)
const FAQItem = ({ title}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
    </Accordion>
    );
  };

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions" />

            <FAQItem title="Imp Question 1"/>
            <FAQItem title="Imp Question 2"/>
            <FAQItem title="Imp Question 3"/>
            <FAQItem title="Imp Question 4"/>
        </Box>
    )

}

export default FAQ;