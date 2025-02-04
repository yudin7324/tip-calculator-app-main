// import React from 'react'
import Input from '../Input/Input';
import Radio from '../Radio/Radio';
import Result from '../Result/Result';
import './calculator.scss';
import IconPerson from '@/components/icons/IconPerson';
import IconDollar from '@/components/icons/IconDollar';

function Calculator() {
  return (
    <div className='calculator'>
      
      <div className='calculator__input-section'>
        <Input label="Bill" placeholder="0" icon={IconDollar} errorMessage="" />
        <div className='calculator__tips'>
          <div className='calculator__tips-title'>Select Tip %</div>
          <div className="calculator__tips-wrap">
            <Radio />
            <Radio />
            <Radio />
            <Radio />
            <Radio />
            <Input placeholder="Custom"/>
          </div>
        </div>
        <Input label="Number of People" placeholder="0" icon={IconPerson} errorMessage="" />
      </div>
      <div className='calculator__result-section'>
        <Result />
        <Result />

        <button className='calculator__btn' type='button' aria-label='reset-btn'>RESET</button>
      </div>
    </div>
  )
}

export default Calculator
