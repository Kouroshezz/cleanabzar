export const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return '';
  } else {
    // Render a countdown
    return <span>{days}:{hours}:{minutes}:{seconds}</span>;
  }
};