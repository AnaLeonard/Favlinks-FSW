import { render } from "react-dom";
import LinkContainer from "./LinkContainer"
import React, { useState } from "react";


const Form = ({ handleSubmit }) => {
    const [state, setState] = useState({
        linkName: '',
        url: ''
    });

    const submitForm = () => {
        const { linkName, url } = state;
        handleSubmit({ name: linkName, URL: url });
        setState({ linkName: '', url: '' });
    };

    return (
        <form>
            <label for="linkName">Link Name:</label>
            <input placeholder=" BTS 💜" type="text" name="linkName" value={state.linkName} onChange={(e) => setState({ ...state, linkName: e.target.value })}
            />

        <br />
        <br />

            <label for="URL">Link URL:</label>
            <input placeholder="https://ibighit.com/bts/eng/" type="text" id="linkURL" name="linkURL" value={state.url} onChange={(e) => setState({ ...state, url: e.target.value })}
            />
        <br />
        <br />
            <button type="button" onClick={submitForm}>Submit</button>
        </form>


    );
}

export default Form;


