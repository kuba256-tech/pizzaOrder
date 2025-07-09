import path from 'path';
const rootPath = __dirname;

const config = {
  rootPath,
  db: 'mongodb+srv://kuba256tech:LMwnKW4YWbWNtimq@cluster11.23c7ms0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster11',
  publicPath: path.join(rootPath, 'public'),
};

export default config;


