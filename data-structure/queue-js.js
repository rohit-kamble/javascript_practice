let queue = [];
let currentSize = 0;

function enque(value) {
  queue[currentSize] = value;
  currentSize++;
}

function dequeue() {
  for (let i = 0; i < queue.length; i++) {
    queue[i] = queue[i + 1];
  }
  currentSize--;
  queue.length = currentSize;
}

function display() {
  console.log(queue);
}

enque(10);
enque(20);
enque(30);
display();
dequeue();
display();
dequeue();
display();
