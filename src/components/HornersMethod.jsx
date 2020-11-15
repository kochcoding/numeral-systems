import React, { useState, useEffect } from 'react';
import { FormulaRow, MarkedFormula } from '../styles';
import Typography from '@material-ui/core/Typography';

const HornersMethod = ({ decimalNumber, toBase, output }) => {
    const [formula, setFormula] = useState([]);

    useEffect(() => {
        let num = Math.floor(decimalNumber / toBase);
        const remainders = [decimalNumber % toBase];
        let rowParts = num < 2 * (toBase - 1) && num !== 0 ? [<>{`${toBase} * `}</>, <MarkedFormula>{num}</MarkedFormula>, <> + </>] : [<>{`${toBase} * ${num} + `}</>];
        //let rowParts = [[<>{`${toBase} * ${num} + `}</>]];
        rowParts.push(<MarkedFormula>{remainders[0]}</MarkedFormula>)
        const rows = [];
        rows.push(<>{rowParts.map((x, index) => <React.Fragment key={index}>{x}</React.Fragment>)}</>);

        while (num > toBase - 1) {
            remainders.push(num % toBase);
            num = Math.floor(num / toBase);
            rowParts = [`${toBase} * `];
            rowParts.push(`(${toBase} * `.repeat(remainders.length - 1));
            num < toBase ? rowParts.push(<MarkedFormula>{num}</MarkedFormula>) : rowParts.push(num);
            for (let i = remainders.length - 1; i >= 0; i--) {
                rowParts.push(' + ')
                rowParts.push(<MarkedFormula>{remainders[i]}</MarkedFormula>)
                if (i !== 0) rowParts.push(')');
            }
            rows.push(<>{rowParts.map((x, index) => <React.Fragment key={index}>{x}</React.Fragment>)}</>);
        }

        setFormula(rows);

    }, [decimalNumber, toBase])

    return <>
        {formula.map((x, index) => <FormulaRow key={index}>{decimalNumber}<sub>10</sub> = {x}</FormulaRow>)}
        <div style={{ marginTop: 15 }}>
            <Typography variant="h6" gutterBottom>
Now we can read the number from the marked digits: <MarkedFormula>{output}<sub>{toBase}</sub></MarkedFormula>
            </Typography>
        </div>
    </>
}

export default HornersMethod;