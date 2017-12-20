/*Implement a method that accepts 3 integer values a, b, c.
*The method should return true if a triangle can be built 
*with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).*/

class TriangleTester{
  public static boolean isTriangle(int a, int b, int c){
    if((a)<=0|(b)<=0|(c)<=0){
      return false;
    }    
      int firstCase = a + b;
      int secondCase = a + c;
      int thirdCase = b + c; 
    
     if((firstCase>c)&&(secondCase>b)&&(thirdCase>a)){
      return true;
    }
    
    return false;
  }
}
