export const create = async (req, res, next) => {
  try {
    const author = await prisma.Author.create({
      data: req.body,
    });
    return res.status(201).json(author);
  } catch (error) {
    return res.status(400).json({ message: 'Invalid request' });
  }
};

export const readAll = async (req, res, next) => {
  try {
    const authors = await prisma.Author.findMany();
    return res.json(authors);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve authors' });
  }
};

export const readOne = async (req, res, next) => {
  try {
    const author = await prisma.Author.findUnique({
      where: { id: req.params.id },
    });
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    return res.json(author);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve author' });
  }
};

export const update = async (req, res, next) => {
  try {
    await prisma.Author.update({
      where: { id: req.params.id },
      data: req.body,
    });
    return res.json({ message: 'Author updated successfully' });
  } catch (error) {
    return res.status(400).json({ message: 'Invalid request' });
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    await prisma.Author.delete({
      where: { id: req.params.id },
    });
    return res.json({ message: 'Author deleted successfully' });
  } catch (error) {
    return res.status(400).json({ message: 'Invalid request' });
  }
};