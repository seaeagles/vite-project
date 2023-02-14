import './index.css'

export function DragonCard(props) {
    console.log(props)
    return (
      <div className={props.type + ' dragon-card'}>
        <h1>{props.type}</h1>
        <div>{props.icon} 
        <span>{props.clicks}</span></div>
      </div>
    )
  }
  