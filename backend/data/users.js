import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'm1000',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Fernando Aponte',
        email: 'fernando@example.com',
        password: bcrypt.hashSync('123456', 10),
    },   
     {
        name: 'Kevin Y',
        email: 'kevin@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users