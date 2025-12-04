import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage({ questions }: { questions: any }) {
  return (
    <div>
      {questions.map((q: any, index: number) => (
        <Accordion
          key={index}
          sx={{
            background: "none",
            color: "#fff",
            border: "1px solid #716d6dff",
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="span">{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>{q.answer}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
