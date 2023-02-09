require('dotenv').config();

const configs = {

    api:{
        nodeEnv:process.env.NODE_ENV,
        port:process.env.PORT,
        host:process.env.HOST,
    },
    db:{

        development:{
            dialect:'postgres',
            host: 'localhost',
            username:'postgres',
            password:'Root',
            port:5432,
            database:'post-db',
            define:{
                timestamps:true,
                underscored:true,
                uderscoredAll:true
            }
        },
        test:{

        },
        produccion:{

        }
    }
}

module.exports = configs