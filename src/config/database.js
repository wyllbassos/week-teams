module.exports = {
    //   dialect: 'postgres',

    //   username: 'pcm',
    //   database: 'pcm',

    // /*
    //   host: 'kandula.db.elephantsql.com',
    //   username: 'asmegtrr',
    //   password: 'Qo9SRqRARsAzZ-OWaH0HbHTUcj6vyksr',
    //   database: 'asmegtrr',
    // */


    //  // host: '172.16.104.250',
    //  //password: 'wylliam',
    //  host: 'localhost',
    //  password: '123456',

    //   port: '5432',

    dialect: 'sqlite',
    storage: 'src/database/database.sqlite',

    define: {
        timestamps: true // Define que as tabelas tem creat_at e update_at
            //underscored: true, //formato dos campos Snake Case (Separado Por Underline)
    }
};