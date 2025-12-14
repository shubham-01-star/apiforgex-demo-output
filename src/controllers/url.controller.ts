import { create } from '../services/url.service';
import { createUrl, shortenUrl } from '../config/db.config';

export const get = async (req, res) => {
  try {
    const urlShorts = await prisma.url.findMany({
      select: {
        id: true,
        code: true,
        originalUrl: true,
      },
    });
    return res.status(200).json(urlShorts);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

export const createUrl = async (req, res) => {
  try {
    const url = await create(req.body);
    return res.status(201).json(url);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

export const shortenUrl = async (req, res) => {
  try {
    const originalUrl = req.params.url;
    const shortUrl = await createUrl({ originalUrl });
    return res.redirect(shortUrl.code);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};