import { Application, Context } from "https://deno.land/x/abc@v1.3.1/mod.ts";
import {
    get_all_books,
    get_book,
    create_book,
    delete_book
} from './controllers/bookController.ts';

const app = new Application();

// routes  :: ctx special type
app.get('/', async(ctx: Context) =>{
    console.log('request made');
    await ctx.file('./public/index.html')
});

//register route :: chain
app
.get('/books',get_all_books)
.get('books/:id', get_book)
.post('/books', create_book)
.delete('books/:id', delete_book);
/* for test local route :: chain
app
.get('/books', (ctx: Context) => {
   // console.log('all books');
   // ctx.string('all books');
    ctx.json([{title: 'love you', price: '100'},{title: 'I think I love you', price: '50'}], 200)
})
.get('books/:id', () => {})
.post('/books', () => {})
.delete('books/:id', () => {});
*/

//listen to port
app.start({port: 3000});