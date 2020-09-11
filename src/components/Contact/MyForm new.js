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
                <label className="editor-field editor-field__textbox">
                    <div className="editor-field__label-container">
                        <div className="editor-field__label">Your Email</div>
                    </div>
                    <div className="editor-field__container">
                        <input className="editor-field__input" type="email" name="email" onfocus="generateNoise(this, 'input')" onblur="removeNoise(this, 'input')" />
                    </div>
                    <span className="editor-field__bottom"></span>
                    <div class="editor-field__noise"></div>
                </label>

                <label className="editor-field editor-field__textbox">
                    <div className="editor-field__label-container">
                        <div className="editor-field__label">Message</div>
                    </div>

                    <div className="editor-field__container">
                        <textarea name="message" type="text" className="editor-field__input"> Hi Anne, ... </textarea>
                    </div>
                    <span className="editor-field__bottom" ></span>
                    <div class="editor-field__noise"></div>
                </label>
                <div className="btn btn--primary" >
                    {status === "SUCCESS" ? <h1>Thanks!</h1> : <button type="submit" className="btn__container">Submit</button>}
                    {status === "ERROR" && <h1>Ooops! There was an error.</h1>}
                    <div className="btn__bottom"></div>
                    <div class="btn__noise"></div>
                    <div class="btn__noise"></div>
                </div>
            </form>
        );
    }
}

export default MyForm
