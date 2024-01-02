import React from "react";

function ReactContact(){

    return(<div>
     <form id="contactForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required><br><br>
    
    <input type="submit" value="Add Contact">
  </form>
    

    </div>)

}

export default ReactContact();