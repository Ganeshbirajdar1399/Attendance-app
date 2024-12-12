import { NextFunction, Request, Response } from 'express';
import StudentSchema from './userSchema';
import { error } from 'console';
import bcrypt from 'bcrypt'

const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { fname, lname, email, password, role } = req.body;
  
    if (!fname || !lname || !email || !password) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }
  
    const student = await StudentSchema.findOne({ email });
    if (student) {
      res.status(400).json({ error: 'User Already Exists.' });
      return;
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newStudent = await StudentSchema.create({
        fname,
        lname,
        email,
        password: hashedPassword, // Save hashed password
        role: role || 'student',  // Default role if not provided
      });
  
      res.status(201).json({
        status: true,
        message: 'Student Created',
        data: {
          _id: newStudent._id,
          fname: newStudent.fname,
          lname: newStudent.lname,
          email: newStudent.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };

const login = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'login' });
};

const me = async (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'me function' });
};

export{
    register,login,me
}