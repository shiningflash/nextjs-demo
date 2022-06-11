export default function User({ user }) {
    return (
        <div key={user.id} style={{padding:"15px 55px"}}>
            <p>{user.id}</p>
            <p><b>Name: </b>{user.name}</p>
            <p><b>Email: </b>{user.email}</p>
        </div>
    )
}