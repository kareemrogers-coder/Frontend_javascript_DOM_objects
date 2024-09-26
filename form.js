function handleSubmit(event){
    event.preventDefault();
    const fname = event.target.elements.fname.value
    console.log("First Name:", fname)

    const lname = event.target.elements.lname.value
    console.log("Last Name:", lname)

    const email = event.target.elements.email.value
    console.log("email:", email)

    const subject = event.target.elements.subject.value
    console.log("message:", subject)

    document.getElementById("form").reset();
}