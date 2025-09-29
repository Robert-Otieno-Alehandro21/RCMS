const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  project: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['Success', 'Failed', 'Pending'], default: 'Pending' },
  date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);
