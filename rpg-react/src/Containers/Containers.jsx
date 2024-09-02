import styles from './Containers.module.css'

function Containers({children, typeOfFrame}) {
  return (
    <div style={styles} className="rpgui-content">
        <div className={`rpgui-container ${typeOfFrame}`}>
            {children}
        </div>
    </div>
  )
}

export default Containers