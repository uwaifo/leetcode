
class Solution {
    public int findJudge(int N, int[][] trust) {
        int[] trustedBy = new int[N + 1];
        int[] peopleTrusted = new int[N + 1];
        for (int[] person : trust) {
            peopleTrusted[person[0]]++;
            trustedBy[person[1]]++;
        }
        for (int i = 1; i <= N; i++)
            if (trustedBy[i] == N - 1 && peopleTrusted[i] == 0)
                return i;
        return -1;

    }

    public static void main(String[] args) {
        System.out.println("hello");
        int[][] trust1 = new int [1, 3], [2, 3], [3, 1];
        int people1 = 3;

    }

}
