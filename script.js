
let myLibrary = [];

function Book( authorName , title , category , description , status)
{
       this.bookId = crypto.randomUUID();
       this.authorName = authorName;
       this.title = title;
       this.category = category;
       this.description = description;
       this.status = status;
}

function addBooksToLibrary()
{
   const title = 
     document.getElementById("title").value;

    const authorName = 
      document.getElementById("authorName").value;

    const category =
       document.getElementById("category").value;

   const description = 
       document.getElementById("description").value;

    const status = document.getElementById("status").value;   

    const newBook = new Book(authorName , title , category , description , status);
  
     myLibrary.push(newBook);

     displayBook(newBook);

   document.getElementById("title").value = "";

   document.getElementById("authorName").value = "";

   document.getElementById("category").value = "";

   document.getElementById("description").value = "";

}

function displayBook(book)
{
     const bookContainer  = document.getElementById("BookContainer");

     const bookCard = document.createElement("div");

     bookCard.classList.add("bookCard");


     bookCard.innerHTML = `     
            <h3>${book.title}</h3>
            <p> Author : ${book.authorName}</p>
            <p> Category : ${book.category}</p>
            <p> Description : ${book.description}</p>
            <p class = "status"> Status: ${book.status}</p>
     `;

      const statusButton = document.createElement("button");

      statusButton.textContent = "change status";

      statusButton.style.backgroundColor = "yellow";

      statusButton.addEventListener("click" , function()
      {
            const statusText = bookCard.querySelector(".status")
      

       if (book.status == "Read ✅")
    {
        book.status = "Not Read yet 😔";
    }

    else
    {
        book.status = "Read ✅";
    }

    statusText.textContent =  "Status: " + book.status;

      });

      const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.style.backgroundColor = "red";

deleteBtn.addEventListener("click" , function()
{
        const DeleteFn = document.querySelector("#BookContainer");

         bookCard.remove();
});

  bookCard.appendChild(deleteBtn);
  bookCard.appendChild(statusButton);
  bookContainer.appendChild(bookCard);



};


const openBtn = document.getElementById("openFormBtn");
const openForm = document.querySelector(".formContainer");

openBtn.addEventListener("click" , function()
{
      openForm.style.display = "flex";

});

const addBtn =
document.getElementById("Add");

addBtn.addEventListener("click", function()
{
      addBooksToLibrary();
      openForm.style.display = "none";
});

const BackBtn = document.getElementById("Back");

BackBtn.addEventListener("click" , function()
{
       openForm.style.display = "none";
}
);


