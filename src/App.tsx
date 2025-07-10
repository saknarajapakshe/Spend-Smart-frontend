import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Button } from '@mui/material'
import GoalDetailsPage from './components/GoalDetailsPage'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const [showGoalDetails, setShowGoalDetails] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showGoalDetails ? (
        <GoalDetailsPage onClose={() => setShowGoalDetails(false)} />
      ) : (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          bgcolor: '#f5f5f5'
        }}>
          <Button 
            variant="contained" 
            size="large"
            onClick={() => setShowGoalDetails(true)}
            sx={{ 
              bgcolor: '#1976d2',
              '&:hover': { bgcolor: '#1565c0' },
              borderRadius: 2,
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none'
            }}
          >
            Open Goal Details
          </Button>
        </Box>
      )}
    </ThemeProvider>
  )
}

export default App
