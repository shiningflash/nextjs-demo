import User from '../components/users'

export default function UserList( {users} ) {
    return (
        <>
            <h1 style={{padding:"15px 55px"}}>User List:</h1>
            {users.map(user => {
                return (
                    <User user={user}/>
                )
            })}
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    return {
        props: {
            users: data
        }
    }
}