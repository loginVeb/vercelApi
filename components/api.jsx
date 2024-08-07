import { headers } from "next/headers";

const Home = () => {
    const ip = headers().get("x-forwarded-for");
    return (
        <main>
            <p>IP Address:</p>
            <h1>{ip}</h1>
        </main>
    );
};
export default Home;
