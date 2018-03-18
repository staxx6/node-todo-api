let env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 8000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
    console.log('Env is : development');
} else if (env === 'test') {
    process.env.PORT = 8000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
    console.log('Env is : test');
}
