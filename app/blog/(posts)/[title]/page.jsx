const PostPage = ({ params }) => {
  return (
    <div>
      <h2>post id</h2>
      <p>{params.title}</p>
    </div>
  );
};
export default PostPage;
