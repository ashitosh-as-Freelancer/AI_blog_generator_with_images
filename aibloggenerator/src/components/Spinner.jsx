export default function Spinner() {
  const styles = {
    position: "fixed",
    width: "100%",
    height: "100%",
    background: "#000",
    opacity: "0.8",
    zIndex: "1",
    top: "100px",
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <div style={{fontSize:'25px'}}>Loading...</div>
    </div>
  );
}
