import {TodolistComponent} from './todolist.component';

describe('To Do List',()=>{
    it('Should add a Task',()=>{
        let todo=new TodolistComponent();
        let newTask="This is a new task";
        const result=todo.pushItem(newTask);
        expect(todo.getItem().length).toBe(4);
    })
    it('Should Delete a Task',()=>{
        let todo=new TodolistComponent();
        let i="1";
        const result=todo.removeItem(i);
        expect(todo.getItem().length).toBe(2);
    })
    it('Should Delete a doneTask',()=>{
        let todo=new TodolistComponent();
        let j="1";
        const result=todo.removedoneItem(j);
        expect(todo.getDoneItem().length).toBe(1);
    })
    it('Should Mark a Task complete',()=>{
        let todo=new TodolistComponent();
        let i="1";
        const olditemLength=todo.getItem().length;
        const olddoneitemlength=todo.getDoneItem().length;
        const movetask=todo.moveItem(i);
        const itemLength=todo.getItem().length;
        const doneitemlength=todo.getDoneItem().length;
        const doneitemresult=doneitemlength>olddoneitemlength;
        const itemresult=itemLength<olditemLength;
        const result=itemresult==doneitemresult;
        expect(result).toBe(true);
    })
    it('Should Mark a Task incomplete',()=>{
        let todo=new TodolistComponent();
        let k="1";
        const olditemLength=todo.getItem().length;
        const olddoneitemlength=todo.getDoneItem().length;
        const movetask=todo.moveDoneItem(k);
        const itemLength=todo.getItem().length;
        const doneitemlength=todo.getDoneItem().length;
        const doneitemresult=doneitemlength<olddoneitemlength;
        const itemresult=itemLength>olditemLength;
        const result=itemresult==doneitemresult;
        expect(result).toBe(true);
    })
    it('Should Edit a Task',()=>{
        let todo=new TodolistComponent();
        let i="1";
        let newTask="This is a edited Task";
        const editTask=todo.updateItem(newTask,i);
        expect(todo.getItem()).toContain(newTask+" ");

    })
    it('Should Edit a doneTask',()=>{
        let todo=new TodolistComponent();
        let l="1";
        let newTask="This is a edited Task";
        const editTask=todo.updatedoneItem(newTask,l);
        expect(todo.getDoneItem()).toContain(newTask+" ");

    })

})