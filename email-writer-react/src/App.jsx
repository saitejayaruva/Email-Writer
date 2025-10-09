import { useState } from 'react';
import './App.css';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper
} from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:8080/api/email/generate', {
        emailContent,
        tone,
      });
      setGeneratedReply(response.data);
    } catch (error) {
      setError('Failed to generate email reply. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background: 'radial-gradient(circle at top left, #001f3f, #000814)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={10}
          sx={{
            width: '100%',
            height: '90vh',
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255,255,255,0.05)',
            borderRadius: '20px',
            p: 5,
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 0 40px rgba(0, 255, 255, 0.2)',
            overflowY: 'auto',
          }}
        >
          {/* Header */}
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #00eaff, #007aff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
            }}
          >
            ✉️ Email Reply Generator
          </Typography>

          {/* Input Section */}
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              label="Original Email Content"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              sx={{
                mb: 3,
                '& .MuiInputBase-root': {
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#fff',
                },
                '& .MuiInputLabel-root': { color: '#ccc' },
              }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel sx={{ color: '#ccc' }}>Tone (Optional)</InputLabel>
              <Select
                value={tone}
                label="Tone (Optional)"
                onChange={(e) => setTone(e.target.value)}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#fff',
                }}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="casual">Casual</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              disabled={!emailContent || loading}
              sx={{
                py: 1.5,
                fontSize: '1rem',
                borderRadius: '12px',
                background: 'linear-gradient(90deg, #00eaff, #007aff)',
                boxShadow: '0 0 20px rgba(0, 122, 255, 0.6)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #007aff, #00eaff)',
                  boxShadow: '0 0 25px rgba(0, 234, 255, 0.9)',
                },
              }}
            >
              {loading ? <CircularProgress size={26} sx={{ color: '#fff' }} /> : 'Generate Reply'}
            </Button>

            {error && (
              <Typography color="error" align="center" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
          </Box>

          {/* Generated Reply */}
          {generatedReply && (
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: '#00eaff', fontWeight: 'bold' }}
              >
                Generated Reply:
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                value={generatedReply}
                inputProps={{ readOnly: true }}
                sx={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#fff',
                  fontFamily: 'monospace',
                }}
              />
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  mt: 2,
                  borderColor: '#00eaff',
                  color: '#00eaff',
                  borderRadius: '12px',
                  '&:hover': {
                    borderColor: '#007aff',
                    color: '#007aff',
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                  },
                }}
                onClick={() => navigator.clipboard.writeText(generatedReply)}
              >
                Copy to Clipboard
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
