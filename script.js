class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority);

        if (newNode.priority == "vermelho"){
            newNode.priority = 3
        }
        else if (newNode.priority == "amarelo"){
            newNode.priority = 2
        }
        else if (newNode.priority == "verde"){
            newNode.priority = 1
        } else{
            "Erro, a prioridade deve ser vermelho, amarelo ou verde"
        }
        if (this.isEmpty()) {
            this.items.push(newNode);
        }
        else {
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
        
        if (newNode.priority > this.items[i].priority) {
          this.items.splice(i, 0, newNode); 
          added = true;
          break;
        }
      }


            if (!added) {
                this.items.push(newNode);
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return 'A fila está vazia';
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return 'A fila está vazia';
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = []
    }

}
const pq = new PriorityQueue()

function clickEnqueue(){
    value = document.getElementById("nomePaciente").value;
    priority = document.getElementById("prioridade").value;
    pq.enqueue(value, priority);
    console.log(pq.items)
    console.log(pq.peek())
}
function clickDeQueue(){
    console.log(pq.dequeue())
}
function clickPeek(){
    console.log(pq.peek())
}

// pq.enqueue("Jo", "verde")
// pq.enqueue("Jano", "vermelho")
// pq.enqueue("Juan", "amarelo")

// console.log(pq.peek())