import './radio.scss'

function Radio() {
  return (
    <label className="radio">
      <span className='radio__text'>5%</span>
      <input className="radio__field" type="radio" name="tip" value="option1" />
    </label>
  )
}

export default Radio
