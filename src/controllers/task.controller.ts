export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await TaskService.getTasks();
    sendResponse(res, 200, items);
  } catch (error) {
    next(error);
  }
};

export const getTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    if (!id) return sendResponse(res, 400, null, 'Missing task ID');
    
    const item = await TaskService.getTask(id);
    
    if (!item) return sendResponse(res, 404, null, 'Task not found');
    
    sendResponse(res, 200, item);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    
    if (!title || !description) return sendResponse(res, 400, null, 'Missing task details');
    
    const item = await TaskService.createTask(title, description);
    sendResponse(res, 201, item, 'Task created successfully');
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!Number(req.params.id)) return sendResponse(res, 400, null, 'Missing task ID');
    
    await TaskService.deleteTask(Number(req.params.id));
    sendResponse(res, 200, null, 'Task deleted successfully');
  } catch (error) {
    next(error);
  }
};