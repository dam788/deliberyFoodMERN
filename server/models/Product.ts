import mongoose, {Document} from 'mongoose';

export interface IProduct extends Document {
  name: string;
  img: string;
  price: number;
  description: string;
  section: string;
  timestamps: Date;
}

const productSchema = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  description: {
    type: String,
    required: true,
    min: 6,
    max: 140,
  },
  section: {
    type: String,
    required: true,
    ref: 'Category'
  }
});

export default mongoose.model<IProduct>('Product', productSchema);
