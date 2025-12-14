export async function create(url, res) {
  try {
    const createdUrl = await prisma.urls.create({
      data: { code: url.code, originalUrl: url.originalUrl },
    });
    return res.json(createdUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create URL" });
  }
}

export async function get(urlCode, res) {
  try {
    const existingUrl = await prisma.urls.findUnique({
      where: { code: urlCode },
    });

    if (!existingUrl) return res.status(404).json({ message: "URL not found" });

    return res.json(existingUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve URL" });
  }
}

export async function update(urlCode, updatedData, res) {
  try {
    const existingUrl = await prisma.urls.findUnique({
      where: { code: urlCode },
    });

    if (!existingUrl) return res.status(404).json({ message: "URL not found" });

    const updatedUrl = await prisma.urls.update({
      where: { code: urlCode },
      data: updatedData,
    });
    return res.json(updatedUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update URL" });
  }
}

export async function deleteUrl(urlCode, res) {
  try {
    const existingUrl = await prisma.urls.findUnique({
      where: { code: urlCode },
    });

    if (!existingUrl) return res.status(404).json({ message: "URL not found" });

    await prisma.urls.delete();
    return res.json({ message: "URL deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete URL" });
  }
}

export async function redirect(urlCode, res) {
  try {
    const existingUrl = await prisma.urls.findUnique({
      where: { code: urlCode },
    });

    if (!existingUrl) return res.status(404).json({ message: "URL not found" });

    const redirectUrl = existingUrl.originalUrl;
    return res.redirect(302, redirectUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to redirect URL" });
  }
}