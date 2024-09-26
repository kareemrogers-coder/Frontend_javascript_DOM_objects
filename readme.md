### Document Manipulation with JavaScript


Problem Statement: You are tasked with creating a web page that dynamically updates its content based on user interaction. The page should utilize JavaScript to manipulate the document structure and content using arrays and objects.

**Task 1:** Create an array containing information about different products, including their names, prices, and descriptions.

``` html
<button id="myBtn">Click here</button>
<div id="demo"></div>

<script>
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

document.getElementById("myBtn").addEventListener("click", function(){
    myfunction(products);
});

```

**Task 2:** Write a function to display the product information on the webpage dynamically.

``` html
function myfunction(products){
const container=document.getElementById("demo");
products.forEach(product=>{ 
    const productDiv = document.createElement("div")
    productDiv.innerHTML = `
    <h3>${product.name} $${product.price}</h3> Description: ${product.description}
    `
container.appendChild(productDiv)
})

```

**Task 3:** Implement an event listener to trigger the display of products when the page loads.

``` html
<body>
<h2>Items</h2>

<p> Please select the button to display all available items name, price and description</p>

<button id="myBtn">Click here</button>
<div id="demo"></div>

<script>
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

document.getElementById("myBtn").addEventListener("click", function(){
    myfunction(products);
});


function myfunction(products){
const container=document.getElementById("demo");
products.forEach(product=>{ 
    const productDiv = document.createElement("div")
    productDiv.innerHTML = `
    <h3>${product.name} $${product.price}</h3> Description: ${product.description}
    `
container.appendChild(productDiv)
})
}
</script>

</body>
```

### 2. Form Manipulation with JavaScript



**Problem Statement:** You are tasked with creating a web page containing a form that allows users to input their information. The page should utilize JavaScript to dynamically handle form submissions, store input data in arrays and objects, and modify form behavior based on user interaction.

**Task 1:** Create an HTML form with input fields for the user's name, email, and message.

```HTML
<div class="container">
        <form onsubmit ="handleSubmit(event)" id="form">
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" placeholder="Please Enter your First" required>
    
            <br><br>
    
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" placeholder="Please Enter your Lastname" required>
    
            <br><br>
    
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" placeholder="Please Enter your email" required>
    
            <br><br>
    
          
    
            <label for="message">Message</label><br>
            <textarea id="subject" name="subject" placeholder="Comment Here.." style="height:200px" required></textarea>
    
    
            <br><br>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
          </form> 

    </div>

```

**Task 2:** Write JavaScript code to handle form submissions and store user input in an object.

```JS
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
```
**Task 3:** Implement form validation to ensure that all required fields are filled before submission.

```HTML
<form onsubmit ="handleSubmit(event)" id="form">

<!-- THE "REQUIRED" TRIGGERS THE MANDATORY ENTRY -->
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" placeholder="Please Enter your First" required>
    
            <br><br>
    
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" placeholder="Please Enter your Lastname" required>
    
            <br><br>
    
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" placeholder="Please Enter your email" required>
    
            <br><br>
    
          
    
            <label for="message">Message</label><br>
            <textarea id="subject" name="subject" placeholder="Comment Here.." style="height:200px" required></textarea>
    
    
            <br><br>
```
### 3. Styling with JavaScript

Problem Statement: You are tasked with creating a web page that demonstrates dynamic styling using JavaScript. The page should include HTML elements that change their appearance in response to user actions or events triggered by JavaScript functions.

**Task 1:** Create an HTML structure with at least 5 elements that will be styled dynamically.

```html
<style>
    body {font-family: Arial, Helvetica, sans-serif;}
    * {box-sizing: border-box;}

    .container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
 
    }

    input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

    input[type=reset] {
  background-color: #f34949;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
    }

  input[type=submit]:hover{
    background-color: #9ae946;
  }

  input[type=reset]:hover{
    background-color: #5b0505;
  }

  input[type=text]:focus{
    background-color: rgb(199, 224, 247);
  } 

  input[type=email]:focus{
    background-color: rgb(199, 224, 247);
  } 
  
  [id=message]:focus{
    background-color: rgb(245, 204, 134);
  } 

</style>
```


**Task 2:** Write JavaScript code to dynamically change the color of the box element when clicked.

```html
  input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

    input[type=reset] {
  background-color: #f34949;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
    }
```

**Task 3:** Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.
```html

 input[type=submit]:hover{
    background-color: #9ae946;
  }

  input[type=reset]:hover{
    background-color: #5b0505;
  }

  input[type=text]:focus{
    background-color: rgb(199, 224, 247);
  } 

  input[type=email]:focus{
    background-color: rgb(199, 224, 247);
  } 
  
  [id=message]:focus{
    background-color: rgb(245, 204, 134);

```