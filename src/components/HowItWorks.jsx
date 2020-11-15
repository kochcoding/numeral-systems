import React from 'react';
import Typography from '@material-ui/core/Typography';
import ConvertIntoDec from './ConvertIntoDec';
import HornersMethod from './HornersMethod';

const HowItWorks = ({ input, fromBase, toBase, output }) => {
    return input ? <div style={{ marginTop: 30 }}>
        <Typography variant="h5" gutterBottom>
            How does it work?
        </Typography>
        {
            fromBase === toBase ? <>
                <Typography variant="subtitle1" gutterBottom>
                    This one was easy! The bases are the same...
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ fontSize: 18 }}>
                    {input}<sub>{fromBase}</sub> = {input}<sub>{toBase}</sub>
                </Typography>
            </> : null
        }
        {
            fromBase !== toBase && fromBase !== 10 ? <>
                <Typography variant="subtitle1" gutterBottom>
                    At first the number is converted into the decimal system:
                </Typography>
                <ConvertIntoDec number={input} base={fromBase} />
            </> : null
        }
        {
            fromBase !== toBase && toBase !== 10 ? <div style={fromBase === 10 ? null : { marginTop: 40 }}>
                <Typography variant="subtitle1" gutterBottom>
                    We convert the decimal number using the "Honers' method"
                </Typography>
                <HornersMethod decimalNumber={parseInt(input, fromBase)} toBase={toBase} output={output} />
            </div> : null
        }
    </div> : null
}

export default HowItWorks;