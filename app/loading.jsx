const MyPage = ({ data }) => {
  if (!data) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="loading">
      <h1>My Page</h1>
      <p>{data}</p>
    </div>
  );
};

export default MyPage;
