import styles from './CheckBox.module.css'

function CheckBox({children, gold, name, id, label}) {
  return (
    <div style={styles} className='rpgui-content'>
      <input type="checkbox" name={name} id={id} className={`rpgui-checkbox ${gold ? 'golden' : ''}`} />
      <label htmlFor={label}>
        {children}
      </label>
    </div>
  )
}

export default CheckBox