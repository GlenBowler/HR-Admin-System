import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className="section_unAuth">
            <h1 className="h1_unAth"> Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            
                <button onClick={goBack} className='button_noAuth'>Go Back</button>

        </section>
    )
}

export default Unauthorized