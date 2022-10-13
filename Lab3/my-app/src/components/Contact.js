import React from 'react'
export default function Contact() {
    return (
            <div id="form">
                <form id="movieform" method="post">

                    <div class="formgroup" id="name-form">
                        <label for="name">Your name*</label>
                        <input type="text" id="name" name="name" />
                    </div>

                    <div class="formgroup" id="message-form">
                        <label for="message">Your message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>

                    <button onClick={()=>{alert('Thanks for submitting'); }}>Submit</button>
                </form>
            </div>
    )
}
