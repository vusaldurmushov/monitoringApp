import DotLoader from "react-spinners/DotLoader";

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DotLoader color="#007BFF" loading={true} size={50} />;
    </div>
  );
}

export default Loading;
