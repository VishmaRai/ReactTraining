const Warning = ({ showWarning, message }) => {
  if (!showWarning) return null;

  return <p className="warning">{message}</p>;
};

export default Warning;