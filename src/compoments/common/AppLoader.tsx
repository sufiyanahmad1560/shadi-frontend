
const AppLoader = () => {
    return (
        <>
            <div>Hello</div>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="loading-overlay">
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
                <div>Loading...</div>
            </div>
        </>
    )
};

export default AppLoader;