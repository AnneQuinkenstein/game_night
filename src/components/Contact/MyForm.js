import React from "react";

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.state = {
            status: ""
        };
    }

    submitForm(ev) {
        console.log('submitted');
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

 renderButton=()=>{
       return (
<div className="btn btnPrimary">
<button type="submit" className="myFormButton">Submit</button>
<div className="btnBottom"></div> 
</div>
       )
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
                <h1>Get in touch</h1>
                <label className="editor-field email">
                    <div className="labelContainer">
                        <div className="labelField">Your Email</div>
                    </div>
                    <div className="fieldContainer emailField">
                        <input className="formInput" type="email" name="email" />
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
                    {status === "SUCCESS" ? <h1>Thanks!</h1> : this.renderButton() }
                    {status === "ERROR" && <h1>Ooops! There was an error.</h1>}
              
            </form>
        );
    }
}

export default MyForm
