

function solution(A) {
    const hills = 0;
    const valleys = 0;
    for (var P = 0; P < A.length; P++) {
        N = A.length;
        Q = A[P + 1];
        if (P > 0) {
            if (A[P - 1] < A[P]) {
                hills++;
            } else if (A[P - 1] > A[P]) {
                valleys++;
            }
        } else if (Q < N - 1) {
            if (A[Q + 1] < A[Q]) {
                hills++;
            } else if (A[Q + 1] > A[Q]) {
                valleys++;
            }
        }
    }

    return console.log(hills + valleys)
}

solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5])



