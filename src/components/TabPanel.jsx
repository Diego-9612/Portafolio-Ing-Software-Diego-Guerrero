import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel({ children, value, index, ...other }) {
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: { xs: 1, sm: 3 } }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export {TabPanel};