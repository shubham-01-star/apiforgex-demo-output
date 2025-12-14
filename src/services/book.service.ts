export async function getBooks(req, res, next) {
  try {
    const books = await prisma.book.findMany({
      include: {
        genre: true,
        authors: {
          take: 10,
          skip: 0
        }
      },
      orderBy: {
        published_year: 'asc'
      }
    });

    return res.json(books);
  } catch (error) {
    return next(error);
  }
}

export async function getBook(req, res, next) {
  try {
    const id = req.params.id;
    const book = await prisma.book.findUnique({
      where: { id: Number(id) },
      include: {
        genre: true,
        authors: {
          take: 10,
          skip: 0
        }
      }
    });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(book);
  } catch (error) {
    return next(error);
  }
}

export async function createBook(req, res, next) {
  try {
    const book = await prisma.book.create({
      data: req.body
    });

    return res.status(201).json(book);
  } catch (error) {
    return next(error);
  }
}

export async function updateBook(req, res, next) {
  try {
    const id = req.params.id;
    const book = await prisma.book.update({
      where: { id: Number(id) },
      data: req.body
    });

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.json(book);
  } catch (error) {
    return next(error);
  }
}

export async function deleteBook(req, res, next) {
  try {
    const id = req.params.id;
    await prisma.book.delete({
      where: { id: Number(id) },
      rejectOnEmptyReturn: true
    });

    return res.status(204).json({ message: 'Book deleted successfully' });
  } catch (error) {
    return next(error);
  }
}