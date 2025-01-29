"use client";

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

const TodoListPage = () => {
  const handleAddTask = () => {
    console.log("Tarefa adicionada com sucesso");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-gray-50 text-2xl font-bold mb-6">
        Seu Gerenciador de Tarefas
      </h1>
      <Card className="w-[350px] bg-[#222222]">
        <CardHeader className="text-center">
          <CardTitle>TO DO List</CardTitle>
          <CardDescription>Crie e gerencie suas tarefas</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-4">
              <Input id="input-task" placeholder="Adicione uma tarefa" />
              <Textarea
                className="resize-none w-full h-32"
                placeholder="Insira uma descrição"
                minLength={2}
                maxLength={250}
              />
              <Button type="button" className="w-full" onClick={handleAddTask}>
                <FilePenLine size={20} className="mr-2" />
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
