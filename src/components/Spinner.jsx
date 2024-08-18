import spinner from "../loading spinner.gif";

export default function Spinner () {
    return (
      <div className="text-center">
        <img style={{ width: "300px", height: "200px" }} src={spinner} alt="" />
      </div>
    );
  }
