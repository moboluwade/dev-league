import PropTypes from 'prop-types' // Import PropTypes
import { RxDotFilled } from 'react-icons/rx'
import { IoArrowRedo } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Card = ({ isEventOpen, title, description, type, startDate }) => {

  const buttonStyles = {
    backgroundColor: isEventOpen ? 'black' : '#9F918B',
    cursor: isEventOpen ? 'pointer' : 'not-allowed',
  }
  const dateStyles = {
    backgroundColor: isEventOpen ? '#EC3E02' : '#9F918B',
  }
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 1.01 }}
        transition={{ delay: 0, duration: 0.5, type: 'tween' }}
        className="flex gap-2 px-2 py-4 border-2 rounded-md md:px-6 border-neutral400 md:gap-6"
      >
        <div
          className="flex flex-col items-center justify-center px-8 py-6 text-white"
          style={dateStyles}
        >
          <span className="text-2xl font-bold md:text-5xl">{startDate && new Date(startDate).getDate().toString().padStart(2, '0')}</span>
          <span className="text-lg uppercase md:text-2xl">{startDate && (new Date(startDate).getMonth()+1).toString().padStart(2, '0')}</span>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1 md:justify-between md:gap-4 md:mb-3">
            <h2 className="font-bold text-neutral900 text-md md:text-xl">
              {title}
            </h2>
            <div
              style={buttonStyles}
              className="flex items-center justify-center py-1 pl-2 pr-4 text-white rounded-full"
            >
              <RxDotFilled />
              <span className="text-sm">{type}</span>
            </div>
          </div>
          <div className="mb-2 md:mb-8">
            <p className="w-full max-w-full text-sm whitespace-normal text-neutral600 md:text-lg">
              {description.slice(0, 100)}...{' '}
              <span className="underline text-primary500 underline-offset-2">
                Read More
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="px-1 py-1 rounded-full md:px-3 bg-error50 w-fit">

              {/* condition for if event is Open */}
              {isEventOpen ? (
                <p className="text-xs text-primary500 md:text-sm">
                  Register for this event
                </p>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-1 cursor-pointer md:gap-2">
                  <div className="order-2 px-2 text-sm font-bold text-white rounded-full bg-primary700 lg:order-1">
                    <p>Closed</p>
                  </div>
                  <p className="text-xs font-bold text-center text-primary700 md:text-sm">
                    This event has ended
                  </p>
                </div>
              )}
            </div>
            <div className="text-xl text-neutral600">
              <IoArrowRedo />
            </div>
          </div>
        </div>
      </motion.div>
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
