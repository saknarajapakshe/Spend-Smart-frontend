import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
} from '@mui/material';
import {
  Close as CloseIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface Transaction {
  id: string;
  date: string;
  time: string;
  description: string;
  amount: number;
}

interface GoalDetailsPageProps {
  onClose: () => void;
}

const GoalDetailsPage: React.FC<GoalDetailsPageProps> = ({ onClose }) => {
  const [addRecordOpen, setAddRecordOpen] = useState(false);
  const [newRecord, setNewRecord] = useState({
    amount: '',
    description: 'Necessities',
    date: new Date().toISOString().split('T')[0],
    time: '5:30 pm'
  });

  // Sample data
  const goalData = {
    title: 'Buying a Guitar',
    goalAmount: 60000,
    savedAmount: 15000,
    remainingDays: 2
  };

  const progressPercentage = Math.round((goalData.savedAmount / goalData.goalAmount) * 100);

  const pieData = [
    { name: 'Completed', value: progressPercentage },
    { name: 'Remaining', value: 100 - progressPercentage }
  ];

  const savingsProgressData = [
    { day: 1, amount: 1000 },
    { day: 2, amount: 800 },
    { day: 3, amount: 1200 },
    { day: 4, amount: 900 },
    { day: 5, amount: 1100 },
    { day: 6, amount: 1000 },
    { day: 7, amount: 800 },
    { day: 8, amount: 1300 },
    { day: 9, amount: 1100 },
    { day: 10, amount: 900 },
    { day: 11, amount: 1200 },
    { day: 12, amount: 1000 },
    { day: 13, amount: 800 },
    { day: 14, amount: 1100 }
  ];

  const transactions: Transaction[] = [
    {
      id: '1',
      date: '29 Jan 2024',
      time: '5:30 pm',
      description: 'Necessities',
      amount: 100.00
    },
    {
      id: '2',
      date: '29 Jan 2024',
      time: '5:30 pm',
      description: 'Necessities',
      amount: 100.00
    },
    {
      id: '3',
      date: '29 Jan 2024',
      time: '5:30 pm',
      description: 'Necessities',
      amount: 100.00
    },
    {
      id: '4',
      date: '29 Jan 2024',
      time: '5:30 pm',
      description: 'Necessities',
      amount: 100.00
    },
    {
      id: '5',
      date: '29 Jan 2024',
      time: '5:30 pm',
      description: 'Necessities',
      amount: 100.00
    }
  ];

  const handleAddRecord = () => {
    // Handle adding new record logic here
    console.log('Adding record:', newRecord);
    setAddRecordOpen(false);
    setNewRecord({
      amount: '',
      description: 'Necessities',
      date: new Date().toISOString().split('T')[0],
      time: '5:30 pm'
    });
  };

  const COLORS = ['#1976d2', '#e3f2fd'];

  return (
    <Box sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bgcolor: '#f5f5f5',
      zIndex: 1300,
      overflow: 'auto'
    }}>
      {/* Header */}
      <Box sx={{ 
        bgcolor: 'white',
        p: 2,
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {goalData.title}
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Main Content */}
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Left Column - Progress Circle and Goal Info */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center', mb: 3 }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                <ResponsiveContainer width={200} height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx={100}
                      cy={100}
                      innerRadius={60}
                      outerRadius={90}
                      startAngle={90}
                      endAngle={450}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center'
                }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    {progressPercentage}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Completed
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ textAlign: 'left', mt: 3 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Goal</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {goalData.goalAmount.toLocaleString()} LKR
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Saved</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {goalData.savedAmount.toLocaleString()} LKR
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">Remaining</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {goalData.remainingDays} Days
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <IconButton size="small" sx={{ bgcolor: '#f5f5f5' }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ bgcolor: '#f5f5f5' }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column - Savings Progress Chart */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Saving Progress
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={savingsProgressData}>
                  <XAxis 
                    dataKey="day" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12 }}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="#1976d2"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>

        {/* Add Saving Record Button */}
        <Box sx={{ mb: 3 }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setAddRecordOpen(true)}
            sx={{
              bgcolor: '#1976d2',
              '&:hover': { bgcolor: '#1565c0' },
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Add Saving Record
          </Button>
        </Box>

        {/* Transaction History */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            History
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>Date</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>Time</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>Description</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600, color: 'text.secondary' }}>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} sx={{ '&:hover': { bgcolor: '#f9f9f9' } }}>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        {transaction.date}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                        {transaction.time}
                      </Box>
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell align="right">
                      <Typography sx={{ color: '#4caf50', fontWeight: 600 }}>
                        +{transaction.amount.toFixed(3)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {(transaction.amount * 0.0036).toFixed(4)} {/* Assuming conversion rate */}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      {/* Add Record Dialog */}
      <Dialog 
        open={addRecordOpen} 
        onClose={() => setAddRecordOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add Saving Record</DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <TextField
              fullWidth
              label="Amount"
              type="number"
              value={newRecord.amount}
              onChange={(e) => setNewRecord({ ...newRecord, amount: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Description"
              value={newRecord.description}
              onChange={(e) => setNewRecord({ ...newRecord, description: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={newRecord.date}
              onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Time"
              value={newRecord.time}
              onChange={(e) => setNewRecord({ ...newRecord, time: e.target.value })}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddRecordOpen(false)}>Cancel</Button>
          <Button onClick={handleAddRecord} variant="contained">
            Add Record
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GoalDetailsPage;