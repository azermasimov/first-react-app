// import ReactDOM
import ReactDOM from 'react-dom'

// Create App component - function
function App() {
    const style = {
        backgroundColor: "gray",
        color: "white",
        display: "block",
        marginTop: "15px",
        width: "6%",
        height: "30px",
        borderRadius: "5px",
        fontSize: "20px",
    };
    const styleSubject = {
        width: "450px",
        color: "gray",
        display: "block",
        fontSize: "20px",
    };
    const btnText = "Submit";
    const labelName = "Name:";
    const labelTextarea = "Message Me...";

    // class => className
    return (
        <div className="container">
            <form>
                <div className="row">
                    <label htmlFor="name" className="label-class">
                        { labelName }
                    </label>
                    <input id="name" type="text" />
                </div>
                <div className="row">
                    <label htmlFor="subject" clasaName="label-class">
                        { labelTextarea }
                    </label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={ styleSubject }></textarea>
                    <button style={ style }>{ btnText }</button>
                </div>
            </form>
        </div>
    );
}

// render on html document
ReactDOM.render(<App />, document.querySelector('#root'))
