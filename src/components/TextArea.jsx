
import Warning from "./Warning";
const TextArea = () => {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("<script>")) {
      setMessage("No 'script' tag is allowed");
      setShowWarning(true);
      newText = newText.replace("<script>", " ");
    } else if (newText.includes("@")) {
      setShowWarning(true);
      setMessage("No @ is allowed!");
      newText = newText.replace("@", "");
    } else {
      setMessage("");
      setShowWarning(false);
    }
    setText(newText);
  };
  return (
    <>
      <textarea
        className="textarea"
        rows={12}
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck={false}
      />
      <Warning showWarning={showWarning} message={message} />
    </>
  );
};

export default TextArea;