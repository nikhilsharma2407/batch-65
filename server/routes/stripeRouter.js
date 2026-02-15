const express = require("express");
const Stripe = require("stripe");
const { UserModel } = require("../models/UserModels");
const { responseCreator } = require("../utils/responseHandler");

const stripeRouter = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

stripeRouter.get("/", (_, res) => res.send("stripe route is working"));
//  create checkout session
stripeRouter.post("/create-checkout-session", async (req, res, next) => {
  try {
    const cart = res.locals.userdata.cart;
    console.log("🚀 ~ cart:", "checkout session", cart);

    const lineItems = cart.items.map((product) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: product.title,
            images: [product.image],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.quantity,
      };
    });
    console.log("🚀 ~ lineItems:", lineItems);

    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.CLIENT_URL}/checkout?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/checkout?session_id={CHECKOUT_SESSION_ID}&isCancelled=true`,
      line_items: lineItems,
      payment_method_types: ["card"],
      mode: "payment",
    });
    console.log("🚀 ~ session:", session);

    res.send(
      responseCreator("Checkout session created", {
        url: session.url,
        id: session.id,
      }),
    );
  } catch (error) {
    next(error);
  }
});

stripeRouter.post("/get-order-details", async (req, res, next) => {
  try {
    const { session_id } = req.query;
    const { username, cart } = res.locals.userdata;
    const session = await stripe.checkout.sessions.retrieve(session_id);
    console.log("🚀 ~ session:", session);
    const order = {
      stripeSessionId: session_id,
      ...cart,
      paymentStatus: session.payment_status,
    };

    await UserModel.clearCart(username);
    const data = await UserModel.updateOne(
      { username },
      { $push: { orders: order } },
    );

    res.send(responseCreator("Order placed successfully", order));
  } catch (error) {
    next(error);
  }
});

module.exports = stripeRouter;
