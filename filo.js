/**
 * FILO Algorithm - First In, Last Out 
 * @author Adão Dias <adahox@gmail.com>
 */
function Pilha(size) {

    let n = 0;
    let p = new Array(size);

    return {
        add: (item) => {
            if(n == p.length) 
                throw new Error("Pilha Cheia");  
            p[n] = item;
            n++;
        },
        remove: () => {
            if (n === 0) 
                throw new Error("Pilha Vazia.");
            n--;
        },
        list: () => {
            console.warn(" === LISTANDO ===");
            if(n === 0) 
                return console.warn("Pilha Vazia.");
            for(let i = 0; i < n; i++) 
                console.log(p[i]);
        }
    }
}

let p = new Pilha(3);

p.list();
p.add(3);
p.add(2);
p.list();
p.add(10);
p.list();
p.remove();
p.list();
p.add(15);
p.list();
p.remove();
p.remove();
p.list();