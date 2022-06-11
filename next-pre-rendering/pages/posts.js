import Post from "../components/posts"

export default function PostList( {posts} ) {
    return (<div style={{background: "#CCCCFF"}}>
        <h1 style={{padding: "10px 35px"}}><u>Post List</u></h1>
        {posts.map(post => {
            return (
                <Post post={post}/>
            )
        })}
    </div>)
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    return {
        props: {
            posts: posts
        }
    }
}