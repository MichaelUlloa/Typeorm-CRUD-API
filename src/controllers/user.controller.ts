import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { User } from "../entity/User";


export const getUsers = async (req : Request, res : Response) : Promise<Response> => {
    const users = await getRepository(User).find();
    
    return res.json(users); 
};

export const createUser = async (req : Request, res : Response) : Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const result = await getRepository(User).save(newUser);

    return res.json(result).status(200); 
}

export const getUserById = async (req : Request, res : Response) : Promise<Response> => {
    const paramId = req.params.id;
    const userFound = await getRepository(User).findOne(paramId);

    return res.json(userFound); 
} 

export const updateUser = async (req : Request, res : Response) : Promise<Response> => {
    const paramId = req.params.id;
    const user = await getRepository(User).findOne(paramId);

    if(user){
        getRepository(User).merge(user, req.body);
        const results = await getRepository(User).save(user);
        return res.json(results);
    }
    
    return res.status(404).json({msg: 'User not found'});
} 

export const deleteUser = async (req : Request, res : Response) : Promise<Response> => {
    const paramId = req.params.id;
    const results = await getRepository(User).delete(paramId);
    return res.json(results); 
} 