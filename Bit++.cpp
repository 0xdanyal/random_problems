// int x=2;
//   x++; // 2
//  --x; // 3-1=2
//  cout<<x<<"\n"; // 2



#include <iostream>
using namespace std;

int main(){

    int n; // for no. of iterations
    cin>>n;

    int x=0;

    string s; // will be used to check for strings

    while(n--){

        cin>>s;

         // x++ = s[0] = 'x', s[1] = '+', s[2] = '+'
        // s[1] --> the 1 index of string which is in case of
        // x++ and ++x are '+' while in --x and x-- are '-'
    if(s[1]== '+') {
        ++x;
    }

    else{
        --x; 
    }
}

        cout<< x <<endl;

        return 0;
}