import mongoose from 'mongoose';

//db connection
const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      () => console.log('connected to atlas')
    );
  } catch (error) {
    console.log(error);
    //*para que detenga la ejecución:
    process.exit(1);
  }
};

export default dbConnection;
