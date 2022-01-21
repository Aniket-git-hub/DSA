#include<stdio.h>
int main()
{
    int array[20];
    for(int i = 0; i < 21; i++){
        array[i] = i;
        printf("%d", array[i]);
    }
    return 0;
}

