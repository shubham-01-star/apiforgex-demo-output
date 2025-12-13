async register(user: { id: number; username: string; email: string; password: string }) {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  return { 
    ...user,
    password: hashedPassword
  }
}