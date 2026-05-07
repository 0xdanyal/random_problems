#include <iostream>
using namespace std;

int main(){
        int n,k;
        cin>>n>>k; // n = total no of prtcpnts and k is the score based on which the advancers will be decided.
        int scores[50];
        // input scores of n prtcpnts    
    for (int i = 0; i < n; i++) {
        cin >> scores[i];
    }

 int cutoff = scores[k-1]; // cutoff will store the array of k-1 size
 int count=0;
        // to calc. no of advancers based on kth postion
        for(int i = 0; i < n; i++){
            if(scores[i]>= cutoff && scores[i] > 0){
                cout<< "next round ones: " << scores[i] << " " << endl;
                    count++;
        }}
        
        cout<< count << endl;
}