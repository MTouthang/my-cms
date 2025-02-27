// app/api/route.ts

import { books } from "../../data/book";
export async function GET() {
  // Read all books
  return new Response(JSON.stringify(books), { status: 200 });
}

export async function POST(request: Request) {
  // Create a new book
  const newBook = await request.json();
  console.log(newBook);
  books.push(newBook);
  return new Response(JSON.stringify(newBook), { status: 201 });
}

export async function PUT(request: Request) {
  // Update a book
  const updatedBook = await request.json();
  const index = books.findIndex((book) => book.id === updatedBook.id);
  if (index !== -1) {
    books[index] = updatedBook;
  }
  return new Response(JSON.stringify(updatedBook), { status: 200 });
}

export async function DELETE(request: Request) {
  // Delete a book
  const { id } = await request.json();
  const index = books.findIndex((book) => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
  }
  return new Response("Book deleted", { status: 200 });
}
