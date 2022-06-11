export default function Post( {post} ) {
    return (
        <div key={post.id} style={{padding: "8px 55px"}}>
            <p><b>Title: </b>{post.title}</p>
            <p><b>UserId: </b>{post.userId}</p>
            <p><b>Body: </b>{post.body}</p>
        </div>
    )
}