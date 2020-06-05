/*
 * FILO ALGORITHM - FIST IN, LAST OUT
 * @author Adão Dias <adahox@gmail.com>
 */
function Pilha (size) {

    let p = new Array(size + 1);

    let first = 0; 
    let last = 0;

    return  {
    
        add: (item) => {
            if( ((last + 1) % p.length) == first ) 
                throw new Error("Pilha cheia!");

            p[last] = item;
            last = (last + 1) % p.length;
        },

        remove: () => {
            if ( first == last) 
                throw new Error("Pilha Vazia!");

            let response = p[first];
            first = (first + 1) % p.length;
            return response;
        },

        list:  () => {
           console.log("=== listando ===");
            let i = first;

            while(i != last) {
                console.log(`p[${i}] = ${p[i]}`);
                i = (i + 1) % p.length
            }
        } 
    }
}

const pi = new Pilha(3);

pi.add(1);
pi.list();
pi.add(3);
pi.list();
pi.add(4);
pi.list();
pi.remove();
pi.list();
pi.add(10);
pi.list();
pi.remove();
pi.list();