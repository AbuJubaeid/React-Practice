import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return (
        <div>
            <MainNavigation/>
            <main>
                <h1>An error occured</h1>
                <p>Can't find this page</p>
            </main>
        </div>
    )
}
export default ErrorPage