"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FilePenLine } from "lucide-react";
import { Button } from "../_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import { Input } from "../_components/ui/input";
import { Textarea } from "../_components/ui/textarea";
import { Label } from "../_components/ui/label";

// Definição do schema de validação com Zod
const taskSchema = z.object({
  task: z
    .string()
    .trim()
    .min(1, { message: "A tarefa deve ter pelo menos 1 carácter" })
    .max(50, { message: "Máximo de 50 caracteres" }),
});

const TodoListPage = () => {
  // Configuração do react-hook-form com Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  // Função chamada ao enviar o formulário
  const onSubmit = (data: any) => {
    console.log("Tarefa adicionada com sucesso:", data);
    reset(); // Limpa o formulário após o envio
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <Card className="w-[350px] bg-[#222222]">
        <CardHeader className="text-center">
          <CardTitle>TO DO List</CardTitle>
          <CardDescription>Crie e gerencie suas tarefas</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {/* Campo de entrada da tarefa */}
              <Input
                id="input-task"
                placeholder="Adicione uma tarefa"
                {...register("task")}
              />
              {typeof errors.task?.message === "string" && (
                <p className="text-red-500 text-xs text-center" id="task-error">
                  {errors.task.message}
                </p>
              )}

              {/* Campo de descrição */}
              <Textarea
                className="resize-none w-full h-32"
                placeholder="Insira uma descrição (Opcional)"
                {...register("description")}
              />
              {typeof errors.description?.message === "string" && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}

              {/* Botão de adicionar */}
              <Button type="submit" className="w-full">
                <FilePenLine size={20} className="mr-0" />
                Adicionar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoListPage;
