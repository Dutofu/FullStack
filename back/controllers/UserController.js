import { PrismaClient } from "@prisma/client";
import Jwt, { decode } from "jsonwebtoken";

const prisma = new PrismaClient();

const getProfile = async (req, res) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.json({ error: 'No token provided' });
    }
    
    Jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.json({ error: 'Unauthorized' });
        }
        
        prisma.user.findUnique({
            where: {
                email: decoded.email
            },
            include: {
                agent: true
            }
        })
        .then((user) => {
            res.json(user);

        })
        .catch((error) => {
            res.json(error);
        }); 
    });
};

const favoriteAgent = (req, res) => {
    const token = req.headers['x-access-token']

    if(!token) {
        return res.json({ error: 'No token provided'})
    }

    Jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if(error) {
            return res.json({ error: 'Unauthorized' })
        }

        prisma.user.update({
            where: {
                email: decoded.email
            },
            data: {
                agentId: Number(req.body.agent)
            }
        })
        .then((user) => {
            res.json(user)
        })
        .then((error) => {
            res.json(error)
        })
    })
}

export { getProfile, favoriteAgent };