import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        const { status } = this.state;
        return (
            <form
                className="formContainer"
                onSubmit={this.submitForm}
                action="https://formspree.io/maypzkgy"
                method="POST"
            >
                <h1>Conctact me</h1>
                <label className="editor-field email">
                    <div className="labelContainer">
                        <div className="labelField">Your Email</div>
                    </div>
                    <div className="fieldContainer emailField">
                        <input type="email" name="email" className="formInput" />
                    </div>
                    <span className="fieldBottom"></span>
                </label>
                <label className="editor-field message">
                    <div className="labelContainer">
                        <div className="labelField">Message</div>
                    </div>

                    <div className="fieldContainer messageField">
                        <textarea name="message" className="formInput"> Hi Anne, ... </textarea>
                    </div>
                    <span className="fieldBottom"></span>
                </label>
                <div className="btn btnPrimary">
                    {status === "SUCCESS" ? <h1>Thanks!</h1> : <button className="myFormButton">Submit</button>}
                    {status === "ERROR" && <h1>Ooops! There was an error.</h1>}
                    <div className="btnBottom"></div> 
                </div>
            </form>
        );
    }
}

export default MyForm