class Solution:
    def reverse(self, x: int) -> int:
        output = 0
        negative = False
        if(x < 0):
            negative = True
            x = x * -1
        while(x):
            output = output * 10
            output = output + (x % 10)
            x = x // 10
        if(abs(output) >= 0x7FFFFFFF):return 0;
        if(negative):
            output = output * -1;
        return output
            