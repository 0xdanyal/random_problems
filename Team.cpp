

// each integer is either 0 or 1
// if two out of three of them are sure about the prob. soltn. then they will solve it else not
// e.g.The input is:
//  3
// 1 1 0
// 1 1 1
// 1 0 0
// ==> the output will be 2


#include <iostream>
using namespace std;

int main() {
   int n;
   cin>>n;

   int answer=0;


   for(int i=0; i<n; i++){
    int a , b, c;
    cin>>a >> b >> c;

    if(a + b + c > 1){
        answer++;
    }
   }

   cout<<"Answer: "<<answer<<"\n";
    
}

