import { useState, useMemo, useCallback } from 'react';
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Result from '../Result/Result';
import './calculator.scss';
import IconPerson from '@/components/icons/IconPerson';
import IconDollar from '@/components/icons/IconDollar';

const radioData = [
  { text: '5%', value: 5 },
  { text: '10%', value: 10 },
  { text: '15%', value: 15 },
  { text: '25%', value: 25 },
  { text: '50%', value: 50 }
];

function Calculator() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState('');

  const billValue = parseInt(bill) || 0;
  const peopleValue = parseInt(people) || 0;
  const tipPercentage = selectedTip ?? (parseFloat(customTip) || 0);

  const isError = peopleValue <= 0 && billValue > 0;
  const isResetDisabled = billValue <= 0 && peopleValue <= 0 && !tipPercentage;

  const { tipAmount, totalPerPerson } = useMemo(() => {
    if (billValue > 0 && tipPercentage > 0 && peopleValue > 0) {
      const tip = (billValue * tipPercentage) / 100 / peopleValue;
      const total = (billValue / peopleValue) + tip;
      return { tipAmount: tip, totalPerPerson: total };
    }
    return { tipAmount: 0, totalPerPerson: 0 };
  }, [billValue, tipPercentage, peopleValue]);

  const handleReset = useCallback(() => {
    setBill('');
    setPeople('');
    setSelectedTip(null);
    setCustomTip('');
  }, []);

  return (
    <div className='calculator'>
      <div className='calculator__input-section'>
        <Input
          id="input-bill"
          onChange={setBill} 
          value={bill}
          label='Bill' 
          placeholder='0' 
          icon={IconDollar} 
          maxLength={7}
        />

        <div className='calculator__tips'>
          <h1 className='calculator__tips-title'>Select Tip %</h1>
          <div className='calculator__tips-wrap'>
            {radioData.map(({ text, value }) => (
              <Radio 
                key={value}
                text={text} 
                value={value}
                checked={selectedTip === value}
                onChange={() => { setSelectedTip(value); setCustomTip(''); }}
              />
            ))}
            <Input
              id="input-custom-tip"
              onChange={(value) => { setCustomTip(value); setSelectedTip(null); }}
              value={customTip}  
              placeholder='Custom'
              maxLength={2}
              isCustomField={true}
            />
          </div>
        </div>

        <Input 
          id="input-people"
          onChange={setPeople} 
          value={people}
          isError={isError}
          label='Number of People' 
          placeholder='0' 
          icon={IconPerson} 
          errorMessage='Can’t be zero' 
          maxLength={3} 
        />
      </div>

      <div className='calculator__result-section'>
        <Result title='Tip Amount' subtitle='/ person' count={tipAmount} />
        <Result title='Total' subtitle='/ person' count={totalPerPerson} />

        <button
          onClick={handleReset} 
          className={`calculator__btn ${isResetDisabled ? 'disabled' : ''}`} 
          type='button' 
          disabled={isResetDisabled}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Calculator;
