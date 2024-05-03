const books = [
  { title: "the book of programming" },
  { title: "python" },
  { title: "the book of programming" },
  { title: "javascript" },
  { title: "the  of programming" },
];

const search = (items, keyword) =>
  items.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );

console.log(search(books, "the book"));
