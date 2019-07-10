// Here's a small JSON object of favorite books, each keyed to a different person.
favorite_books = {
  "diana": "Crime and Punishment",
  "sophie": "The Secret History",
  "cory": "Fahrenheit 451",
  "gabe": "The Hobbit",
  "danny": "Lonesome Dove",
  "dan": "Don Quixote",
  "katie": "10:04",
  "zara": "Rebecca",
  "david": "The Sun Also Rises",
  "alexandra": "Hyperbole and a Half",
  "martin": "The House on Mango Street",
  "jeff": "The Hitchhiker's Guide to the Galaxy"
}


// 1. Before we get started, lets adjust a few things. First off, Jeff just read a new book called "The Martian" and loved it. With just one line of code, change Jeff's favorite book to "The Martian"






// 2. We should also add Ronald to the array. His favorite book is "Lies my History Teacher Told Me."
//    Add that info to the JSON object as a new key-value pair.






// 3a. Now let's start iterating. But first, we'll need an array of the keys for the JSON object.
// Use the Object.keys() function to generate an array of the keys for our object.



// 3b. Now that we have an array of the names, for each person in the JSON object, print out (console.log) a statement that says "___'s favorite book is ____" and fill in the blanks with that person's name and that person's favorite book.





// LEVEL 2: In the address_book.py file, there's an array called "contacts" with 100 dictionaries inside of it. Each JSON object representes a person, and has that person's name, phone number, email, the company they work for, and their address.
//    That means you could print the 7th person's email using this line of code:
//    console.log(address_book.contacts[6]["email"]) // Uncomment this to see if it works. (Remember, array indexing starts at zero, so we use the number 6 to access the 7th name).

// 4. Print out the name and phone number of the first person in the contacts array in the following format:
//    "_____ can be reached at ______" filling in the blanks with the person's name and phone number.






// 5. Print out the same information "_____ can be reached at ______" with names and phone numbers for all 100 of our contacts.






// 6. We're going to send a mass text to all our contacts, so we need everyone's phone number. Our texting program can do it in an instant if we put all the numbers into an array.
//    Create an array called phone_numbers, iterate over our contacts, and add each person's number to that array. Print out the array when you're done to check your work.






// 7. If we wanted to send an email that was only useful for college students and their professors, we could send that email ONLY to folks in our contacts whose email addresses end in ".edu".
//    Create an array called edu_emails and put every .edu email address from our contacts into that array. Print the array when you're done to check your work.
