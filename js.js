function ndzana(a, b, n, m){
    nga = new Array(n);
    var row1 = new Array (m);
    row1[0] = a;
    for (i=1; i<m; i++) {
        row1[i] = Math.pow(row1[i-1], 2);  
    }
    nga[0] = row1;
    
    nga[1] = new Array(m);
    nga[1][0] = b;
    for (i=2; i<n; i++) {
        nga[i] = new Array(m);
        nga[i][0] = Math.pow(nga[i-1][0], 2);
    }
    
    var  counter = 1;
    for (k=1; k<n; k++) {
        for (l=1; l<m; l++) {
            nga[k][l] = counter++;    
        }     
    }      
    return nga;
    }
    console.log(ndzana(3,2,8,10));