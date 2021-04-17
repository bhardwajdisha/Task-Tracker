import PropTypes from 'prop-types'

const Button = ({color ,text, onClick}) => {
    return (
        <div>
            <button className="btn" onClick={onClick} style={{backgroundColor:color}}>
                {text}
            </button>
        </div>
    )
}

Button.propTypes={
    color : PropTypes.string,
    text  : PropTypes.string,
    onClick: PropTypes.func 
}
Button.defaultProps={
    color:"Black",
    title:'Add'
}

export default Button
