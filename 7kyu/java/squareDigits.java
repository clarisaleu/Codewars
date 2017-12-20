/*Welcome. In this kata, you are asked to square every digit of a number.
*For example, if we run 9119 through the function, 811181 will come out.
*Note: The function accepts an integer and returns an integer */

public class SquareDigit {
public static int squareDigits(int n) {
		String num = Integer.toString(n);
		String prod = "";
		for (int i = 0; i < num.length(); i++) {
			String dummy = "";
			dummy = "" + num.charAt(i);
			int squareMe = Integer.parseInt(dummy);
			squareMe = squareMe * squareMe;
			prod += Integer.toString(squareMe);
		}
		return Integer.parseInt(prod);
	}
}
