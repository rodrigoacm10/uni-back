import express from "express";
import userRoutes from "./routes/userRoutes";
import bookRoutes from "./routes/bookRoutes";
import loanRoutes from "./routes/loanRoutes";
import reportRoutes from "./routes/reportRoutes";

const app = express();

app.use(express.json());

// Rotas principais
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/reports", reportRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
