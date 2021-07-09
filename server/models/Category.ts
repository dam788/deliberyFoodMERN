import mongoose,{Document} from 'mongoose';

export interface ICategory extends Document {
  category: string;
  icon?: string
}

const categorySchema = new mongoose.Schema<ICategory>({
  category: {
    type: String,
    required: true,
  },
  icon: {
    name: String,
    image: Buffer,
  },
});

export default mongoose.model<ICategory>('Category', categorySchema);
