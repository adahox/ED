function Pilha(size) {
  let p = new Array(size + 1);
  let first = 0;
  let last = 0;

  return {
    add: (item) => {
      if ((last + 1) % p.length == first) throw new Error("Pilha cheia!");

      p[last] = item;
      last = (last + 1) % p.length;
    },
    remove: () => {
      if (first == last) throw new Error("Pilha Vazia!");

      let response = p[first];
      first = (first + 1) % p.length;
    },
    list: () => {
      console.log("=== listando ===");
      let i = first;
      while (i != last) {
        console.log(`p[${i}] = ${p[i]}`);
        i = (i + 1) % p.length;
      }
    },
  };
}

const pi = new Pilha(3);

pi.add(1);
pi.list(); // 1
pi.add(3);
pi.list(); // 1,3
pi.add(4);
pi.list(); // 1, 3, 4
pi.remove();
pi.list(); // 3, 4
pi.add(10);
pi.list(); // 3, 4, 10
pi.remove();
pi.list(); // 4, 10
console.log(pi.last); // i have not access to this variable. JS clousure does not give me access to change. 
