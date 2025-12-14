export async function create(req, res, next) {
    const { username, password } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({ where: { username } });
        if (existingUser) return res.status(400).json('Username already exists');
        const user = await prisma.user.create({ data: { username, password } });
        return res.json(user);
    } catch (err) {
        return next(err);
    }
}

export async function read(req, res, next) {
    try {
        const user = await prisma.user.findFirst();
        return res.json(user);
    } catch (err) {
        return next(err);
    }
}

export async function update(req, res, next) {
    const { username, password } = req.body;
    try {
        const existingUser = await prisma.user.findUnique({ where: { username } });
        if (!existingUser) return res.status(404).json('User not found');
        const user = await prisma.user.update({ data: { password }, where: { username } });
        return res.json(user);
    } catch (err) {
        return next(err);
    }
}

export async function deleteUser(req, res, next) {
    try {
        const existingUser = await prisma.user.findUnique();
        if (!existingUser) return res.status(404).json('No users found');
        await prisma.user.delete();
        return res.json({ message: 'Users deleted successfully' });
    } catch (err) {
        return next(err);
    }
}