# setup

install node modules
`npm i`

running dev server
`npm run dev`

production build

`npm run build`

## book upload

### step - 1

- screenshot book image , rename it as `book_(no_of_books).png` example `book_22.png`
- save image in `src/assets/png`

### step - 2

- import the image in `src/pages/home/home.jsx`
- example import statment `import book_19 from "../../assets/png/book_19.png";`

### step - 3

- `data`: array in `src/pages/home/home.jsx`
- object structure of object in `data` contains `title,description,image,pdf`
- `title` :include book title , example `book`
- `description`: include description, example `this is a book`
- `image`: include the imported image, `book_19`
- `pdf` : include server path location of the pdf, `./pdf/book_pdf_19.pdf`
- `note`: adding object in last will position the book as last in app, modifying the object index will directly apply to the books position in the shelf

### step - 4

- screenshot the home page convert png to jpg using `https://png2jpg.com/`
- rename the file as `thumbnail.jpg `
- delete the existing thumbail in `pulic` folder and replace it with new one

### step - 5

- `npm run build` for production build
- using `filezilla` enter necessary credentials
- navigate to `/usr/share/nginx/html/Book_Shelf/build`
- delete and replace `index.html`,`thumbnail.jpg`,`assets` with new build / dist folder's `index.html`,`thumbnail.jpg` and `assets`
- rename the book pdf to `book_pdf_(no_of_books).pdf` example `book_pdf_19.pdf`
- upload the book in inside `pdf` folder
  note: do not delete the `pdf` folder
