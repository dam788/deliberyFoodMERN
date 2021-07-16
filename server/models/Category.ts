import mongoose,{Document} from 'mongoose';

export interface ICategory extends Document {
  section: string;
}

const categorySchema = new mongoose.Schema<ICategory>({
  section: {
    type: String,
    required: true,
  }
});

export default mongoose.model<ICategory>('Category', categorySchema);
