import { Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";
import {Book} from '../models/bookModels.ts';
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let books: Book[] = [
    {id: '1', title: 'love is love', author: 'blah', page: 350},
    {id: '2', title: 'the lord of evil', author: 'devil', page: 666},
    {id: '3', title: 'beyond the real', author: 'ucho-jin', page: 840},
]

export const get_all_books = (ctx: Context) => {
    return ctx.json(books, 200);
}

export const get_book = (ctx: Context) => {
   // const {id} = ctx.params.id;
    const {id} = ctx.params;
    const book = books.find((b: Book) => b.id === id);
    if(book){
        return ctx.json(book, 200);
    }
    return ctx.string('no book match out with that id', 404);
}

export const create_book =  (ctx: Context) => {
    const {title,author,pages} =  ctx.body();

    // validate data & types of the data
    const id = v4.generate()
    //const book = {id:id, title:title,author:author,pages:pages}
    const book = {id, title,author,pages}
    books.push(book);

    return ctx.json(book, 201)
}

export const delete_book = (ctx: Context) => {
    const {id} = ctx.params;
    const book = books.find((b: Book) => b.id === id);

    if(book){
        books = books.filter((b: Book) => b.id !== id)
        return ctx.json(book, 200);
    }
    return ctx.string('no book with that id', 404);
}