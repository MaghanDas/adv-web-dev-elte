import { useEffect,useState } from "react";

// UseEffects = "Run COde after REACT updatst the UI"
// Render UI → then run useEffect
// 🧠 2. When do we use it?
// Use it when something is:
// ❗ NOT rendering UI directly
// but still needs to happen:
// fetching data
// timers (setInterval, setTimeout)
// syncing with localStorage
// listening to events

function App() {

    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(!username) return;

        const fetchUser = async () => {
            setLoading(true);

            try {
                const res = await fetch(
                        `https://api.github.com/users/${username}`
                );
                if(!res.ok) throw new Error("Not Found");
                const data = await res.json();
                setUser(data);
            } catch(err){
                setUser(null);
            }finally{
                setLoading(false);
            }
        };
        const timer = setTimeout(fetchUser, 500); // wait 500ms → then fetch
        return () => clearTimeout(timer); // cancels previous call
    }, [username])
    

    return (
        <div>
            <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Github Username" 
            />

             {loading && <p>Loading...</p>}
            {
                user && (
                    <div>
                        <img src={user.avatar_url} width="100" alt="" />
                        <h2>{user.name}</h2>
                        <p>{user.bio}</p>
                    </div>
                ) }
        </div>
    );
}


//   🔥 Dependency array rules
// []        → run once (on mount)
// [x]       → run when x changes
// (no arr)  → run every render (danger)

export default App;
