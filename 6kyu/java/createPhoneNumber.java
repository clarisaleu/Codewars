//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

public class Kata {
  public static String createPhoneNumber(int[] numbers) {
   String dummy = "(";
		for (int i = 0; i < 3; i++) {
			dummy += numbers[i];
		}
		dummy += ") ";
		for (int i = 3; i < 6; i++) {
			dummy += numbers[i];
		}
		dummy += "-";
		for (int i = 6; i < 10; i++) {
			dummy += numbers[i];
		}
		return dummy;
  }
}
