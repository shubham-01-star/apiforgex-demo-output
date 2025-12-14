export async function getBook(req, res, next) {
  try {
    const book = await prisma.book.findFirst();
    if (!book) {
      return res.status(404).json({ message: 'No Book found' });
    }
    res.json(book);
  } catch (err) {
    next(err);
  }
}

export async function getBooks(req, res, next) {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (err) {
    next(err);
  }
}

export async function createBook(req, res, next) {
  try {
    const book = await prisma.book.create({ data: req.body });
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
}

export async function updateBook(req, res, next) {
  try {
    const book = await prisma.book.update({
      where: { id: req.params.id },
      data: req.body,
    });
    res.json(book);
  } catch (err) {
    next(err);
  }
}

export async function deleteBook(req, res, next) {
  try {
    await prisma.book.delete({ where: { id: req.params.id } });
    res.status(204).json({ message: 'Book deleted successfully' });
  } catch (err) {
    next(err);
  }
}