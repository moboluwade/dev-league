import PropTypes from 'prop-types' // Import PropTypes
import { RxDotFilled } from 'react-icons/rx'
import { IoArrowRedo } from 'react-icons/io5'
import { motion } from 'framer-motion'

const Card = ({ isEventOpen, day, month }) => {
  const buttonStyles = {
    backgroundColor: isEventOpen ? 'black' : '#9F918B',
    cursor: isEventOpen ? 'pointer' : 'not-allowed',
  }
  const dateStyles = {
    backgroundColor: isEventOpen ? '#EC3E02' : '#9F918B',
  }
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.01 }}
      transition={{ delay: 0, duration: 0.5, type: 'tween' }}
      className="py-4 px-2 md:px-6 border border-2 rounded-md border-neutral400 flex gap-2 md:gap-6"
    >
      <div
        className="px-8 py-6 text-white flex items-center justify-center flex-col"
        style={dateStyles}
      >
        <span className="text-2xl md:text-5xl font-bold">{day}</span>
        <span className="text-lg uppercase md:text-2xl">{month}</span>
      </div>
      <div>
        <div className="flex md:justify-between flex-wrap items-center gap-2 md:gap-4 mb-1 md:mb-3">
          <h2 className="text-neutral900 text-md md:text-xl font-bold">
            Why Techies Need Law
          </h2>
          <div
            style={buttonStyles}
            className="text-white flex items-center justify-center pl-2 pr-4 py-1 rounded-full"
          >
            <RxDotFilled />
            <span className="text-sm">Virtual</span>
          </div>
        </div>
        <div className="mb-2 md:mb-8">
          <p className="text-neutral600 text-sm md:text-lg">
            How do you create compelling presentations that wow your audience...{' '}
            <span className="text-primary500 underline underline-offset-2">
              Read More
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <div className="px-1 md:px-3 py-1 rounded-full bg-error50 w-fit">
            {isEventOpen ? (
              <p className="text-primary500 text-xs md:text-sm">
                Register for this event
              </p>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2 cursor-pointer">
                <div className="rounded-full bg-primary700 px-2 text-white text-sm font-bold">
                  <p>Closed</p>
                </div>
                <p className="text-primary700 font-bold text-xs md:text-sm">
                  This event has ended
                </p>
              </div>
            )}
          </div>
          <div className="text-neutral600 text-xl">
            <IoArrowRedo />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Prop type validation
Card.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  isEventOpen: PropTypes.bool.isRequired, // Add prop type validation for isEventClosed
}

export default Card
