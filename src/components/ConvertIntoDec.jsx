import React, { useEffect, useState } from 'react';
import { FormulaRow, MarkedFormula } from '../styles';

const ConvertIntoDec = ({ number, base }) => {
    const [formula, setFormula] = useState([]);

    const getNumberFromDigit = (digit) => {
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        return digits.findIndex(x => x === digit);
    }

    useEffect(() => {
        setFormula([<>{number}<sub>{base}</sub> = </>])

        for (let i = 0; i < number.length; i++) {
            setFormula(old => [...old, <>{getNumberFromDigit(number[i])} * {base}<sup>{number.length - i - 1}</sup></>])
            i === number.length - 1 ? setFormula(old => [...old, <> = </>]) : setFormula(old => [...old, <> + </>])
        }
        setFormula(old => [...old, <MarkedFormula>{parseInt(number, base)}<sub>10</sub></MarkedFormula>])
    }, [number, base])

    return <>
        <FormulaRow>
            {formula.map(x => x)}
        </FormulaRow>
    </>
}

export default ConvertIntoDec;