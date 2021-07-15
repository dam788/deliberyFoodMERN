// import Checkout from "../models/Checkout";
import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import mercadopago from "mercadopago";
import { PreferenceCreateResponse } from "mercadopago/resources/preferences";

const createPreference = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    let preference: any;

    preference = {
      items: [
        {
          title: req.body.name,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.qty),
        },
      ],
      back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/try_again",
        pending: "http://localhost:3000/pending",
      },
      auto_return: "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then( (response: PreferenceCreateResponse) => {
        res.json({ id: response.body.id });
      })
      .catch( (error: any) => {
        console.log(error);
      });
  }
);

const feedback = expressAsyncHandler(
  async (req: Request, res: Response): Promise<void> => {
res.json({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id,
    });
  }
);

export { createPreference, feedback };
