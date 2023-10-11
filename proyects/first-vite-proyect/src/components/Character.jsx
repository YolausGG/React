import { useFetch } from "../hooks/useFetch";


function Character() {
    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users`)
    
    return (
        <>
            <ul>
                {error && <li>Error:{error}</li>}
                {loading && <li>Loading...</li>}
                {data?.map((user) => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.phone}</p>
                        <p>1-{user.company.name}</p>
                    </li>
                ))
                }
            </ul>
        </>
    )
}
export default Character;

// coment

