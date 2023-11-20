import "../App.css";

const EmptyPage = ({ handelSubmit }) => {
  return (
    <center>
      <h1 className="emptytext">No Post avilable !</h1>
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={handelSubmit}
      >
        Fetch Posts
      </button>
    </center>
  );
};
export default EmptyPage;
