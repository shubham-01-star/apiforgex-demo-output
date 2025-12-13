async register(user: { id: number; username: string; email: string; password: string }) {
  if (!user.password || user.password === '') {
    throw new Error('Invalid password');
  }
  const hashedPassword = await bcrypt.hash(user.password, 10);
  return { 
    ...user,
    password: hashedPassword
  };
}