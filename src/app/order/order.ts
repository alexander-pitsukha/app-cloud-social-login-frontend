export interface Order {
  id: number;
  userId: number;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
  productId: number;
}
