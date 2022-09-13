import ClipLoader from "react-spinners/RingLoader";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <ClipLoader color={"#36d7b7"} loading={true} size={60} />
    </div>
  );
}

export default Loading;
