import { Button } from "../_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";
import { Input } from "../_components/ui/input";

const TodoListPage = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle>TO DO List</CardTitle>
          <CardDescription>Crie e gerencie sua tarefas</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Input id="input-task" placeholder="Adicione uma tarefa" />
              </div>
              <Button>Adicionar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoListPage;
