// Task A -- Cari Faktor Prima
    const faktor = (arr) => {
        // code here
        let prime = [];
        let nomor = arr;
        for (let i=2; i<=nomor/2; i++){
            if(arr%i === 0){
                prime.push(i);
                arr = arr/i;
            }
        }
        console.log(prime)
    }

    // Test
    faktor(70) // [2,5,7]
    faktor(119) // [7,17]

console.log("==================");

// Task B --> Ganjil, Genap dan Tiga
    const groupAngka = (arr) => {
        // code here
        let ganjil = [];
        let genap = [];
        let tiga = [];
        let hasil = [];
        for (let i=0; i<arr.length; i++){
            if(arr[i]%3===0){
                    tiga.push(arr[i]);
            } else {
                if(arr[i]%2 === 0){
                    genap.push(arr[i]);
                } else {
                    ganjil.push(arr[i]);
                }
            }
        }
        hasil.push(genap);
        hasil.push(ganjil);
        hasil.push(tiga);
        console.log(hasil);
    }

    // T
    groupAngka([2, 4, 6]); // [ [2, 4], [], [6] ]
    groupAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
    groupAngka([100, 151, 122, 99, 111]); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
    groupAngka([]); // [ [], [], [] ]

    console.log("==================");

// Task C --> Chairs

    //DRIVER CODE
    const sittingArrangement = (a,b) => {
        let cek = a.length;
        let kursi = [];
        if(b==0){
            return "Invalid number";
        } else {
            let x=a;
            let y=b;
            for (let j=1; j<b; j++){
                x.push('Kursi Kosong');
            }

            for (let i=0; i<cek; i+=y){
                    kursi.push(x.slice(i,b));
                    b+=b
            }
            return kursi;
        }
    }

    console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
    console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
    console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
    console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
    // [
    //   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
    //   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
    // ]