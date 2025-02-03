// import React from 'react'
import Input from '../Input/Input';
import Button from '../Button/Button';
import './calculator.scss';
import IconPerson from '@/components/icons/IconPerson';
import IconDollar from '@/components/icons/IconDollar';

function Calculator() {
  return (
    <div className='calculator'>
      
      
    <Input label="Bill" placeholder="0" icon={IconDollar} errorMessage="" />

    <Button />

    <Input label="Number of People" placeholder="0" icon={IconPerson} errorMessage="" />

    <Input placeholder="Custom"/>

    </div>
  )
}

export default Calculator
