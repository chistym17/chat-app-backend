import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensure all participants are valid ObjectIds
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true } // Automatically manage `createdAt` and `updatedAt`
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
