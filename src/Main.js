import React, { useState } from 'react'


export default function Main() {

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")

    const [eusername, seteusername] = useState("");
    const [epassword, setepassword] = useState("");
    const [eemail, seteemail] = useState("");
    const [ecpassword, setecpassword] = useState("");

    const [ucolor, setucolor] = useState("")
    const [ecolor, setecolor] = useState("")
    const [pcolor, setpcolor] = useState("")
    const [cpcolor, setcpcolor] = useState("")

    function validate() {
        if (username.length > 8) {
            seteusername("")
            setucolor('green')
        } else {
            seteusername("Username must be 8 letter long.")
            setucolor('red')
        }

        if (email.includes("@gmail")) {
            seteemail("")
            setecolor("green")
        } else {
            seteemail("E-Mail should contain @gmail")
            setecolor("red")
        }

        if ((password.length > 8) && (password.includes("."))) {
            setepassword("")
            setpcolor("green")
        } else {
            setepassword("Password should be atleast 8 letter long & must contain . operator")
            setpcolor("red")
        }

        if (password!="" && password == cpassword) {
            setecpassword("")
            setcpcolor("green")
        } else {
            setecpassword("Passwords does not match.")
            setcpcolor("red")
        }

    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1>Form Validation</h1>
                    <input type="text" name="" placeholder="Username" className="form-control" id="username" 
                    value={username}
                    onChange={(e) => {setusername(e.target.value)}}
                    style={{borderColor: ucolor}}
                    />
                    <p>{eusername}</p>

                    <input type="text" name="" placeholder="Email" className="form-control" id="email" 
                    value={email}
                    onChange={(e) => {setemail(e.target.value)}}
                    style={{borderColor: ecolor}}
                    />
                    <p>{eemail}</p>

                    <input type="text" name="" placeholder="Password" className="form-control" id="password" 
                    value={password}
                    onChange={(e) => {setpassword(e.target.value)}}
                    style={{borderColor: pcolor}}
                    />
                    <p>{epassword}</p>

                    <input type="text" name="" placeholder="Confirm Password" className="form-control" id="cpassword" 
                     value={cpassword}
                    onChange={(e) => {setcpassword(e.target.value)}}
                    style={{borderColor: cpcolor}}
                    />
                    <p>{ecpassword}</p>

                    <button className="btn btn-primary" onClick={validate} >Submit</button>
                </div>
            </div>
        </div>
    )
}

