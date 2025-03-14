// import * as React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function AccordionUi({ panel = 1, title, options }) {

    const {details,data=[],render} = options
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls={`panel${panel}-content`}
          id={`panel${panel}-header`}
        >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {details && details}
            {data.length >0 && data?.map(render)}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
