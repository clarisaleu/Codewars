/*Your task is to make a function that can take any non-negative integer as a 
*argument and return it with its digits in descending order. Essentially,
*rearrange the digits to create the highest possible number.*/


import java.util.*;

public class DescendingOrder {
  public static int sortDesc(final int num) {
		String dummy = Integer.toString(num);
		Integer[] storeMe = new Integer[dummy.length()];
		for (int i = 0; i < storeMe.length; i++) {
			String dummy2 = "";
			dummy2 = dummy2 + dummy.charAt(i);
			storeMe[i] = Integer.parseInt(dummy2);
		}
		Arrays.sort(storeMe, Collections.reverseOrder());
		dummy = "";
		for (int i = 0; i < storeMe.length; i++) {
			dummy += storeMe[i];
		}
		return Integer.parseInt(dummy);
	}
}
