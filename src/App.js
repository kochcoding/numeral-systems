import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';

import HowItWorks from './components/HowItWorks';

const differentBases = [
  { name: 'Binary (base 2)', base: 2, digits: ['0', '1'] },
  { name: 'Ternary (base 3)', base: 3, digits: ['0', '1', '2'] },
  { name: 'Quaternary (base 4)', base: 4, digits: ['0', '1', '2', '3'] },
  { name: 'Quinary (base 5)', base: 5, digits: ['0', '1', '2', '3', '4'] },
  { name: 'Senary (base 6)', base: 6, digits: ['0', '1', '2', '3', '4', '5'] },
  { name: 'Septenary (base 7)', base: 7, digits: ['0', '1', '2', '3', '4', '5', '6'] },
  { name: 'Octal (base 8)', base: 8, digits: ['0', '1', '2', '3', '4', '5', '6', '7'] },
  { name: 'Nonary (base 9)', base: 9, digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8'] },
  { name: 'Decimal / Denary (base 10)', base: 10, digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
  { name: 'Hexadecimal (base 16)', base: 16, digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'] },
];

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(2);

  const getPlaceholderText = (val) => {
    let placeholder = 'Error'
    differentBases.forEach(x => {
      if (x.base === val) return placeholder = x.name;
    });
    return placeholder;
  }

  const getHexNumber = (decNum) => {
    if (decNum < 0 || decNum > 15) {
      alert(`Could not convert "${decNum}" into hex`);
      return 0;
    }
    return differentBases.find(x => x.base === 16).digits[decNum];
  }

  const checkInputAllowed = (val) => {
    const lastDigit = val.slice(-1);
    const system = differentBases.find(x => x.base === fromBase);
    return system.digits.includes(lastDigit);
  }

  const handleInputChange = (val) => {
    if (!val) {
      setInput('');
      return setOutput('');
    }
    if (!checkInputAllowed(val)) return;

    setInput(val);

    let num = parseInt(val, fromBase);
    let out = '';
    let remainder;

    while (num > 0) {
      remainder = num % toBase;
      out = toBase !== 16 ? remainder.toString() + out : getHexNumber(remainder) + out;
      num = Math.floor(num / toBase);
    }

    setOutput(out);
  }

  useEffect(() => handleInputChange(input));

  return (
    <div style={{ paddingBottom: 300 }}>
      <AppBar position="static" style={{ background: '#1976d2' }}>
        <Toolbar>
          <Container>
            <Typography variant="h6">
              Numeral Systems
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: 50 }}>
        <Typography variant="h5" gutterBottom>
          Convert numbers between different numeral systems
            </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Here you can convert numbers from different numeral systems into one another.
        </Typography>
        <Grid container spacing={3} style={{ marginTop: 10 }}>
          <Grid item xs={6} sm={2}>
            <FormControl fullWidth>
              <InputLabel>From</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fromBase}
                onChange={(e) => {
                  setInput('');
                  setOutput('');
                  setFromBase(e.target.value);
                }}
              >
                {
                  differentBases.map(numBase => <MenuItem key={numBase.base} value={numBase.base}>
                    {numBase.name}
                  </MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={2}>
            <FormControl fullWidth>
              <InputLabel>To</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={toBase}
                onChange={(e) => setToBase(e.target.value)}
              >
                {
                  differentBases.map(numBase => <MenuItem key={numBase.base} value={numBase.base}>
                    {numBase.name}
                  </MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label={getPlaceholderText(fromBase)}
              value={input}
              onChange={(e) => handleInputChange(e.target.value.toUpperCase())}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              disabled
              multiline
              fullWidth
              label={getPlaceholderText(toBase)}
              value={output}
            />
          </Grid>
        </Grid>
        {
          input ? <div style={{ marginTop: 20 }}>
            <Typography variant="h6" gutterBottom>
              {input}<sub>{fromBase}</sub> = {output}<sub>{toBase}</sub>
            </Typography>
          </div> : null
        }

        <HowItWorks input={input} output={output} fromBase={fromBase} toBase={toBase} />
      </Container>
    </div>
  );
}

export default App;
