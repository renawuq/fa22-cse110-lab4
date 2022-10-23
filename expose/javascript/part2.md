# Part 2 
1. Line 12 will write the value of i to the console, which is 3. Since the variable is declared with the keyword 'var', the variable i can be accessed outside of the block. Therefore, as i will be the total number of prices in the list prices[] after the loop. Since we input with the list [100, 200, 300], there are 3 elements in the prices list. Thus, line 12 will print the number 3. 


2. Line 13 will print the number 150, which is the variable that represent the discountedPrice. As the variable is declared with the keyword var, it can be accessed outside of the block. The for loop will run 3 times with the input prices=[100, 200, 300] and discount = 0.5:
   1. discountedPrice = prices[0] * (1-discount) = 100 *(1-0.5) = 50.
   2. discountPrice = prices[1]*(1-discount) = 200 * 0.5 = 100.
   3. discountedPrice = prices[2] *(1-discount) = 300 * 0.5 = 150. 
After the loop end, the value in idscountedPrice will remain as 150 and as it has the keyword var, therefore, line 13 will print 150.

3. Line 14 will print the number 150, which is the variable that represent the finalPrice. Since this variable is declare with the keyword with var, line 14 still have the access for it even outside the block. Same as question 2, the loop will run 3 times with the input prices=[100, 200, 300] and discount = 0.5:
   1. discountedPrice = 50, finalPrice = Math.round(discountedPrice*100)/100 = round((50 * 100)/100) = 50;
   2. discountedPrice = 100, finalPrice = Math.round(discountedPrice*100)/100 = round((100 * 100)/100) = 100;
   3. discountedPrice = 150, finalPrice = Math.round(discountedPrice*100)/100 = round((150 * 100)/100) = 150;
After the loop end, the value in idscountedPrice will remain as 150 and as it has the keyword var, therefore, line 13 will print 150.

4. This function will return the list of discounted, which is [ 50, 100, 150 ] in this case. The list discounted will updated in the loop by pushing the finalPrice. Since from questio 3, we know the value of finalPrice, we have: 
   1. finalPrice = 50; discounted.push(finalPrice) = discounted.push(50) => discounted = [50].
   2. finalPrice = 100; discounted.push(finalPrice) = discounted.push(100) => discounted = [50, 100].
   3.  finalPrice = 150; discounted.push(finalPrice) = discounted.push(150) => discounted = [50, 100, 150]. 
After run the loop 3 times, the value of i will become 3, which is not less than the length of prices, therefore, the loop will end and return the list of discounted. Thus, this function return discounted = [50, 100, 150]. 

5. The code caused an error as the line 12 is trying to access the variable i, which was declared with the keyword let. This keywork means the variable i can only be accessed within the loop. Since line 12 is outside the loop, it does not have the access for that variable. Thus, the code will cause an error. 

6. The code will cause an error as it is trying to access the variable discountedPrice, which was declared with the keyword let as well. Thus, this variable can be only access inside the for loop. Since line 13 is outside the loop, it does not have the access for it. Thus, the code will cause an error. 

7. The line 14 will print the number 150, which is the value stroed inside the finalPrice as I explained in 3. Even though finalPrice was declared with the keyword let, line 14 will still have the accessed for it. As finalPrice was delcared in line 4, which is inside the function but outside the loop. Therefore, everything inside the function will have the access for the variable finalPrice. Therefore, line 14 will print 150. 

8. The function will return [ 50, 100, 150 ] as I was explained in question 4. Even though the keyword to declare the variable discount was let, the function can still return the right thing. The function have the return statement inside the function, which still have the access for the dicounted. Thus, the function will return [50, 100, 150]. 

9. The code will cause an error with the same reason as question 5, variable i is sitll declared with the keyword let. It is not accessable by the line 11. Thus, the code will cause an error. 

10. The line 12 will print 3, which is the length of the list: prices. As the input prices has 3 eilements, and the const keyword gives its variable the same scope as the let keyword. Since line 12 is in the same block when the variable length was declared, the line 12 has the access for the variable length. Therefore, line 12 will print the number 3. 

11. The functin will return the list: [ 50, 100, 150 ], which is the value stored in the list: discounted. At first, the function will declare an empty list and a variable length = 3 with the keyword const. Here is the process in the loop with the input prices[100, 200, 300] and discount = 0.5:
    1. i = 0, discountedPrice = prices[0] *(1-0.5) = 100 *(0.5) = 50; discounted.push(50) => dicounted = [ 50 ].
    2. i = 1, discountedPrice = 100; discounted.push(100) => discount = [ 50, 100 ].
    3. i = 2, discountedPrice = 150; discounted.push(150) => discount = [ 50, 100, 150 ]. 
    4. i = 3, i = length, which is not less than the length. The loop will end here. 
After the loop, the function will return the list discount = [ 50, 100, 150 ] in the line 14. Since line 14 is in the same scope with line 3, line 14 has the accessed for it and return the right things. The variable discounted was declared with the keyword const, as the function did not try to change the elements in the discounted beside just calling the push function. Therefore, the code will not cause an error and return the discounted = [ 50, 100, 150 ].

12. A. student["name"] <br>
    B. student["Grad Year"] <br>
    C. student.greeting() <br>
    D. student["Favorite Teacher"].name <br>
    E. student.courseLoad[0]

13. A. '32' as '3' is a string and 2 is a integer. And integers map to their exact string representation. Thus, it will output '32'. <br>
    B. 1 as string map to their exact integer representation. Then we will have 3 - 2 = 1, 1 as the final output. <br>
    C. 3 as null map to 0, so we will have 3+null = 3+0 = 3, 3 as the output. <br>
    D. '3null' as '3' is a string and null will be convert into string as well. Thus '3null' is the output. <br>
    E. 4 as true map to 1, so we have 1+3 = 4, 4 is the output. <br>
    F. 0 as false map to 0 and null map to 0 as well. <br>
    G. '3undefined' as '3' is a string and undefined convert to string as well. Thus, '3undefined' is the output.
    H. NaN as undefined map to NaN, and '3' map to integer, thus we have 3 - NaN = NaN. Thus, it will output NaN. 

14. A. true, as '2' map to integer and we will have 2>1, which is true. <br>
    B. false, as '2' map to integer 2 and '12' map to integer 12. We will have 2<12, which is false. <br>
    C. true, as '2' map to integer 2, we will check if 2 equals to 2, which is true. <br>
    D. false, as === checks the equality without tye conversion. As 2 is integer and '2' is string, they are different type, and it will return false. <br>
    E. false, as true will map to integer 1 and 1 is not equal to 2, thus 1 == 2 will output false. <br>
    F. true, as Boolean(2) is true. Since 2 is not 0, NaN, empty string, undefined and null, it will return true. Since true is the same type and same value as true, true === true, it will output true. 

15. == operator will do the type conversion before comparsion and === will compare the value without conersion. For example, '2' == 2 will return true as '2' will be convert to the integer 2 before the comparsion. But '2' === 2 will return false as '2' is a string and 2 is a number and they have different types. 

16. In JS file part2-question16.js

17. The result is [ 2, 4, 6 ]. <br>
    At first, the function will declare an empty list newArr. And there is a loop that will run for the number of time of the length of array. In this case, array = [ 1,2,3 ] and the length of the array will be 3, which means the loop will be run for 3 times. <br> 
    1. It will case the function callback, which is doSomething with the input: array[0] = 1. As the doSomething(1) will return 2*num = 2*1 = 2. After we have the result from the doSomething function, newArr will push the value to the list. Thus, newArr = [ 2 ].
    2. It will called the doSomething function with input array[1] = 2. And doSomething(2) function will return num*2 = 2*2 = 4. newArr will push the value 4 to the list and we will have the list newArr = [ 2, 4 ]. 
    3. It will called the doSomething function with input array[2] = 3. And doSomething(3) function will return num*3 = 2*3 = 6. newArr will push the value 6 to the list and we will have the list newArr = [ 2, 4, 6 ].
    4. i = 3 in this case, which is the same as the length of the array. The loop will end and return the list newArr. <br>
Therefore, the result will be a list = [ 2, 4, 6 ]. 

18. 