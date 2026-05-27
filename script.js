
let myLibrary = [];

function Book( authorName , title , category , description)
{
       this.bookId = crypto.randomUUID;
       this.authorName = authorName;
       this.title = title;
       this.category = category;
       this.description = description;
}

function addBooksToLibrary()
{
   const title = 
     document.getElementById("Title").value;

    const authorName = 
      document.getElementById("authorName").value;

    const category =
       document.getElementById("category").value;

   const description = 
       document.getElementById("description").value;

    const newBook = new Book(authorName , title , category , description);
  

     myLibrary.push(newBook);
  
}



