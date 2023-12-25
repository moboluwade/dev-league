import PropTypes from 'prop-types' // Import PropTypes

const Card = ({ isEventOpen, day, month }) => {
  const buttonStyles = {
    backgroundColor: isEventOpen ? 'black' : 'gray',
    cursor: isEventOpen ? 'not-allowed' : 'pointer',
  }
  return (
    <div>
      <div className="bg-primary500">
        <span>{day}</span>
        <span>{month}</span>
      </div>
      <div>
        <div>
          <h2>Why Techies Need Law</h2>
          <div style={buttonStyles} className="px-2 text-white">
            Virtual
          </div>
        </div>
        <div>
          <p>
            How do you create compelling presentations that wow your audience...
          </p>
          <button>Read More</button>
        </div>
      </div>
      <div>
        <div>
          {isEventOpen ? (
            <p>Register for this event</p>
          ) : (
            <div>
              <button></button>
              <p>This event has ended</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Prop type validation
Card.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  isEventOpen: PropTypes.bool.isRequired, // Add prop type validation for isEventClosed
}

export default Card
